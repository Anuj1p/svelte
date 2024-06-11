import type { IAaEquityAccountsListPageData } from './types'

const ACCOUNT_AGGREGATOR_EQUITY_END_POINT = "https://apixt-iw.indmoney.com/track/api/widgets/v1"

const getUpdatedHeaders = () => {
    return {
        "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkX29uIjoxNzE4MTM2NTUxLCJlbWFpbCI6ImFudWpqYW5ncmEyMDAyQGdtYWlsLmNvbSIsImV4cCI6MTcxODE1ODE1MSwibW9iaWxlIjoiOTMwNjAwMTAwNyIsIm9yaWdfaWF0IjoxNzE4MTM2NTUxLCJwbGF0Zm9ybSI6IndlYiIsInRva2VuX2lkIjoxMjM5Nzk3NSwidXNlcl9pZCI6Njk5Mjg3MywidXNlcm5hbWUiOiI5MzA2MDAxMDA3In0.jJgO-u1ds4Ae1J5V19c74PmiNFo47gBqisQ44D6ODI8',
        "platform": 'web'
    }
}

export const api = () => ({
  yourBrokers: async (): Promise<IAaEquityAccountsListPageData> => {
    const response = await fetch(
      `${ACCOUNT_AGGREGATOR_EQUITY_END_POINT}/in-stocks/consolidated-holdings`,
      {
        headers: getUpdatedHeaders(),
        // credentials: "include",
      }
    )
    const data = (await response.json()) as Post
    return data
  },
})
