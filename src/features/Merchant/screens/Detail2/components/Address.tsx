/* eslint-disable unicorn/no-useless-undefined */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { IMerchant } from '@features/Merchant/Merchant.type'
import { defaultLocation, GMAPS_API_KEY, GMAPS_ID, GMAPS_LIBRARIES } from '@constants/google'
import { useCallback, useEffect, useState } from 'react'
import { GoogleMap, Libraries, useJsApiLoader } from '@react-google-maps/api'

import iconMarker from '@assets/images/marker-alt.svg'

const Address = ({ data }: { data: IMerchant }) => {
  console.log(data)
  const [map, setMap] = useState<google.maps.Map | undefined>()
  const [userLocation, setUserLocation] = useState<{
    lat: number
    lng: number
  }>({
    lat: Number(data?.latitude) || defaultLocation.lat,
    lng: Number(data?.longitude) || defaultLocation.lng
  })

  useEffect(() => {
    if (data) {
      setUserLocation({
        lat: Number(data?.latitude),
        lng: Number(data?.longitude)
      })
    }
  }, [data])

  const { isLoaded } = useJsApiLoader({
    libraries: GMAPS_LIBRARIES as Libraries,
    id: GMAPS_ID,
    googleMapsApiKey: GMAPS_API_KEY
  })

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map)
  }, [])

  const onUnmount = useCallback(() => {
    setMap(undefined)
  }, [])

  const handleDragEnd = useCallback(() => {
    if (map) {
      const newCenter = map.getCenter()
      if (newCenter) {
        setUserLocation({ lat: newCenter.lat(), lng: newCenter.lng() })
      }
    }
  }, [map])

  const mapStyle = {
    height: '350px',
    width: '100%',
    borderRadius: '8px'
  }

  if (!isLoaded) {
    return <div />
  }
  return (
    <div>
      <div className="text-lg font-semibold">Alamat</div>
      <div className="border-b-2 py-6">
        <div>{data?.address}</div>
        <GoogleMap
          mapContainerStyle={mapStyle}
          zoom={15}
          onLoad={onLoad}
          options={{
            zoomControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            gestureHandling: 'greedy',
            streetViewControl: false
          }}
          center={userLocation}
          onUnmount={onUnmount}
          onDragEnd={handleDragEnd}
        >
          <div>
            <img src={iconMarker} alt="marker" className="marker" />
          </div>
        </GoogleMap>
      </div>
    </div>
  )
}

export default Address
