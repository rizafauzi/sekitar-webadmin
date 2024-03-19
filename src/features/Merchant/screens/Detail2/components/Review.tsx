/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import iconStar from '@assets/images/star.icon.svg'
import iconStarFilled from '@assets/images/star-filled.icon.svg'
import { IReviewSummary } from '../type'

const Review = ({ review }: { review: IReviewSummary }) => {
  if (review.total_review === 0) return <div />
  return (
    <div>
      <div>
        <div className="text-lg font-semibold mb-4">Review Pelanggan</div>
        <div className="flex flex-row gap-2 items-center my-2">
          <img src={iconStarFilled} alt="star" className="star" />
          <div className="text-xl font-bold">{review?.store_rating}</div>
          <div className="text-[#BDBDBD]">
            {review?.total_rating} rating • {review?.total_review} ulasan
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-[300px] mt-6">
        <div>{review?.store_review?.name}</div>
        <div className="flex flex-row ml-[-6px]">
          {Array.from({ length: review?.store_review?.rating })?.map((_, index) => (
            <div key={index} className="scale-75">
              <img src={iconStarFilled} alt="star" className="star" />
            </div>
          ))}
          {Array.from({ length: 5 - review?.store_review?.rating })?.map((_, index) => (
            <div key={index} className="scale-75">
              <img src={iconStar} alt="star" className="star" />
            </div>
          ))}
        </div>
        <div>{review?.store_review?.comment}</div>
        <div>
          {review?.store_review?.products[0]?.name}{' '}
          {review?.store_review?.products.length > 1
            ? `,..+${review?.store_review?.products.length - 1} produk lainnya`
            : ''}
        </div>
      </div>
    </div>
  )
}

export default Review
