import type { IAaEquityL1AnalyticsPageData, IAaEquityAccountsListPageData } from "./types";

const ACCOUNT_AGGREGATOR_EQUITY_END_POINT =
  "https://apixt-iw.indmoney.com/track/api/widgets/v1";

const getUpdatedHeaders = () => {
  return {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkX29uIjoxNzIwNzg5NDgwLCJlbWFpbCI6ImFudWpqYW5ncmEyMDAyQGdtYWlsLmNvbSIsImV4cCI6MTczNjM0MTQ4MCwibW9iaWxlIjoiOTMwNjAwMTAwNyIsIm9yaWdfaWF0IjoxNzIwNzg5NDgwLCJwbGF0Zm9ybSI6IkFuZHJvaWQiLCJ0b2tlbl9pZCI6MTM1MzI0MTIsInVzZXJfaWQiOjY5OTI4NzMsInVzZXJuYW1lIjoiOTMwNjAwMTAwNyJ9.MCLE3qmT33xNwxPILrezZiKFREo_9PWavdysO_JNB80",
    platform: "web",
  };
};

export const api = () => ({
  yourBrokers: async (): Promise<IAaEquityAccountsListPageData> => {
    const response = await fetch(
      `${ACCOUNT_AGGREGATOR_EQUITY_END_POINT}/in-stocks/consolidated-holdings`,
      {
        headers: getUpdatedHeaders(),
      }
    );
    const data = (await response.json()) as IAaEquityAccountsListPageData;
    return data;
  },
  brokersAnalytics: async (): Promise<IAaEquityL1AnalyticsPageData> => {
    const response = await fetch(
      `${ACCOUNT_AGGREGATOR_EQUITY_END_POINT}/in-stocks/consolidated-analytics`,
      {
        headers: getUpdatedHeaders(),
      }
    );
    const data = (await response.json()) as IAaEquityL1AnalyticsPageData;
    return data;
  },
});
