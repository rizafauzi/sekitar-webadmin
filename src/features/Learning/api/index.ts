/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { apiRequest } from '@configs/axios'
import sekitarEnv from '@utils/ENV'
import { ILearningListParams } from '../Learning.type'

export const getLearningList = ({
  page,
  limit,
  category,
  activeDate,
  deactiveDate
}: ILearningListParams) =>
  apiRequest({
    path: '/api/v1/article/list',
    method: 'GET',
    params: {
      p: page,
      c: limit,
      category,
      active_date: activeDate,
      deactive_date: deactiveDate
    }
  })

export const getCategoryLearning = () =>
  apiRequest({
    path: '/api/v1/article/categories',
    method: 'GET'
  })

export const getLearningDetail = (id: number) =>
  apiRequest({
    path: `/api/v1/article/${id}`,
    method: 'GET'
  })

export const createLearning = (bodyRequest: any) =>
  apiRequest({
    path: '/api/v1/article/create',
    method: 'POST',
    bodyRequest,
    headers: {
      access_token: sekitarEnv.merchantToken
    }
  })

export const deleteLearning = (id: number) =>
  apiRequest({
    path: `/api/v1/article/${id}`,
    method: 'DELETE',
    headers: {
      access_token: sekitarEnv.merchantToken
    }
  })
