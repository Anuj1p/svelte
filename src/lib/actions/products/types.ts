export type Post = {
  id: number;
  title: string;
  body: string;
};

export interface ITextArrWidget {
  text: string;
  text_color: string;
  text_align?: "left" | "right" | "center";
  font_weight?: number;
  underline?: boolean;
}

export interface ICtaDetails {
  title: string;
  event_props: {
    [key: string]: string;
  };
  event_name: string;
  custom_params?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
  navlink?: string;
  disabled?: boolean;
  image_url?: string;
}

export interface ICtaWidget {
  primary?: ICtaDetails;
  default?: ICtaDetails;
}

export interface IEquitySensexRate {
  icon_url: string;
  rate_arr: ITextArrWidget[];
  bg_color: string;
}

export interface IPersuasionWidget {
  icon_url: string;
  text: string;
  bg_color: string;
  text_color: string;
  dynamic_texts?: string[];
}

export interface IImageWidget {
  url: string;
  width: number;
  height: number;
  stop_loop?: boolean;
}

export type IAnimationWidget = IImageWidget;

export type IAaActionCardPersuasion = IPersuasionWidget & {
  align_left?: boolean;
  animation?: IAnimationWidget;
};

export interface IViewEventDetails {
  event_name: string;
  event_props: {
    [key: string]: string;
  };
}

export interface IBankAccountCard {
  logo_url: string;
  title: string;
  title_color: string;
  title_font_weight: number;
  description: string;
  show_progress_bar?: boolean;
  percentage?: string;
  cta: ICtaWidget;
  persuasion: IAaActionCardPersuasion;
  right_content: {
    value: string;
    show_arrow: boolean;
    navlink: string;
    event_details?: IViewEventDetails;
  };
  persuasion_arr: IAaActionCardPersuasion[];
}

export interface IEquityMasthead {
  sensex_value: IEquitySensexRate;
  broker_name: {
    icon_url?: string;
    title: string;
  };
  amount: string;
  show_refresh: boolean;
  refresh_icon: string;
  last_updated: string;
  one_day_change: ITextArrWidget[];
  refresh_in_progress?: boolean;
  refresh_available?: boolean;
  toast_message?: string;
  bottom_persuasion?: IPersuasionWidget;
  view_event?: IViewEventDetails;
}

export interface IConnectOtherAccounts {
  navlink: string;
  title: string;
  active_accounts: number;
  track_title: string;
  image: IImageWidget;
  event_details?: IViewEventDetails;
}

export interface IUpdatingAccountsCard {
  image: IImageWidget;
  heading: string;
  description: string;
}

export interface IAaFooter {
  text: string;
  logo: IImageWidget;
  bottom_text?: string;
}

export interface INonKycUserCard {
  bg_image: string;
  title_arr: ITextArrWidget[];
  secondary_title: string;
  list: {
    icon_url: string;
    text: string;
  }[];
  cta: ICtaWidget;
}

export interface ICsPersuasion {
  image_before_persuasion?: IImageWidget;
  bg_color: string;
  text_arr: ITextArrWidget[];
  image?: IImageWidget;
}

export interface ICarouselCard {
  bg_color: string;
  border_color: string;
  image: IImageWidget;
  title: ICsPersuasion;
  description: ICsPersuasion;
  navlink: string;
  redirection?: boolean;
  custom_params?: {
    refresh?: boolean;
  };
  event_detail?: IViewEventDetails;
  event_details?: IViewEventDetails;
}

export interface IPriceAlertBottomSheet {
  image: IImageWidget;
  title: string;
  sub_title_arr: ITextArrWidget[];
  list?: string[];
  cta: ICtaWidget;
  view_event?: IViewEventDetails;
}

export interface ITrackingDeprecatedPersuasion {
  bg_color: string;
  border_color: string;
  icon_url: string;
  title: string;
  title_color: string;
  subtitle: string;
  navlink?: string;
  subtitle_color?: string;
  event_details?: IViewEventDetails;
  upgrade?: {
    text: string;
    text_color: string;
    icon_url: string;
  };
  invalid_token?: boolean;
}

export interface IPortfolioScanBs {
  logo: IImageWidget;
  title: string;
  subtitle: string;
  cta: ICtaWidget;
  view_event?: IViewEventDetails;
}

export interface IAaEquityAccountsListPageDataChild {
  masthead: IEquityMasthead;
  back_icon_navlink: string;
  connect_other_accounts: IConnectOtherAccounts;
  updating_accounts_card: IUpdatingAccountsCard;
  brokers_list: {
    title: string;
    list: IBankAccountCard[];
  };
  inactive_brokers_list: {
    title: string;
    list: IBankAccountCard[];
  };
  footer: IAaFooter;
  view_event?: IViewEventDetails;
  non_kyc_user_card?: INonKycUserCard;
  zero_state?: {
    image: IImageWidget;
    title: string;
    disclaimer_arr?: ITextArrWidget[];
  };
  carousel_cards: ICarouselCard[];
  price_alert: {
    icon_url: string;
    title: string;
    tag: {
      text: string;
      bg_color: string;
      text_color: string;
      show_tag: boolean;
    };
    alert_enabled: boolean;
    bottomsheet: IPriceAlertBottomSheet;
    disable_bottomsheet: IPriceAlertBottomSheet;
  };
  password_persuasion?: ITrackingDeprecatedPersuasion;
  portfolio_scan_bottomsheet: IPortfolioScanBs;
  should_poll?: boolean;
  polling_duration?: number;
}

export interface IAaEquityAccountsListPageData {
  data: IAaEquityAccountsListPageDataChild;
}

export declare type TextVariants =
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "small"
  | "overline"
  | "link";

export interface ISearch {
  image_url: string;
  label: string;
}

export type IImagesList = ISearch;

export interface IAaTrendingStocksTabData {
  list: {
    title: string;
    icon_url: string;
    subtitle_text_arr: Array<
      ITextArrWidget & {
        font_size: number;
      }
    >;
    holdings: {
      label: string;
      // icon_urls: string[]
      icons: IImagesList[];
    };
    news: {
      icon: IImageWidget;
      title: string;
    }[];
    navlink: string;
    analyst_data: {
      no_of_analysts: number;
      sentiment: string;
      text_color: string;
      bg_color: string;
    };
    event_details?: IViewEventDetails;
  }[];
}

export interface IAaTrendingStocksWidgetData {
  title: string;
  event_name: string;
  tabs: {
    id: string;
    label: string;
    data: IAaTrendingStocksTabData;
  }[];
  key?: string;
}

export interface IAaEquityBarChartData {
  category: string;
  large_cap: number;
  mid_cap: number;
  small_cap: number;
}

export interface IEquityInsightSection {
  title: string;
  list: {
    title: string;
    inner_list: string[];
  }[];
}

export interface IEquityPieChart {
  name: string;
  percentage: number;
  color: string;
  value: string;
}

export interface IEquityAnalyticsStocksTab {
  total_stocks?: number;
  insight_section: IEquityInsightSection;
  pie_chart_data: IEquityPieChart[];
  event_details?: IViewEventDetails;
}

export interface IEquityAnalyticsMarketCapTab {
  insight_section: IEquityInsightSection;
  bar_chart_data: IAaEquityBarChartData[];
  event_details?: IViewEventDetails;
}

export interface IEquityAnalyticsSectorTab {
  insight_section: IEquityInsightSection;
  pie_chart_data: IEquityPieChart[];
  event_details?: IViewEventDetails;
}

export interface IPortfolioAnalysisWidget {
  title: string;
  event_name: string;
  tabs: {
    stocks_tab: IEquityAnalyticsStocksTab;
    market_cap_tab: IEquityAnalyticsMarketCapTab;
    sector_tab: IEquityAnalyticsSectorTab;
  };
  key?: string;
}

export interface IUnlockData {
  title: string;
  lottie: IAnimationWidget;
  lock_icon: string;
  stocks_icon?: IImageWidget;
  event_details: IViewEventDetails;
}

export interface ITransactionCard {
  logo_url: string;
  middle: {
    title: string;
    title_color?: string;
    title_font_weight?: number;
    image_url: string;
    description: string;
    description_color: string;
    images_list: IImagesList[];
    show_progress_bar?: boolean;
    percentage?: string;
    percentage_bar_color?: string;
  };
  right: {
    title: string;
    title_color: string;
    description: string;
    image_url: string;
    show_arrow: boolean;
    navlink: string;
    font_size?: string;
    event_details?: IViewEventDetails;
  };
}

export interface IExpertAnalysisTab {
  id: string;
  label: string;
  data: {
    title_text_arr: ITextArrWidget[];
    title_alignment?: string;
    analyst_data?: {
      sentiment: string;
      color: string;
      bg_color: string;
    };
    list: ITransactionCard[];
    unlock_data: IUnlockData;
  };
}

export interface IExpertAnalysisWidget {
  title: string;
  event_name: string;
  tabs: IExpertAnalysisTab[];
  unlock_data: IUnlockData;
  key?: string;
}

export type IStocksValuationWidget = IExpertAnalysisWidget;

export interface IYourPortfolioInsightsTabList {
  border_color: string;
  sentiment_icon: IImageWidget;
  icon: IImageWidget;
  name: string;
  title: string;
  subtitle: string;
}

export interface IYourPortfolioInsightsTabList {
  border_color: string;
  sentiment_icon: IImageWidget;
  icon: IImageWidget;
  name: string;
  title: string;
  subtitle: string;
}

export interface IYourPortfolioInsightsTab {
  id: string;
  label: string;
  data: {
    list: IYourPortfolioInsightsTabList[];
    unlock_data: IUnlockData;
  };
}

export interface IYourPortfolioInsights {
  title: string;
  event_name: string;
  timestamp: string;
  tabs: IYourPortfolioInsightsTab[];
  key?: string;
}

export interface IBetaWidgetBottomsheet {
  heading: string;
  title_arr: ITextArrWidget[];
  sub_title_arr: ITextArrWidget[];
  cta: ICtaWidget;
}

export interface IBetaInsightsWidget {
  title: string;
  value: number;
  sub_title: string;
  unlock_data: IUnlockData;
  bottomsheet: IBetaWidgetBottomsheet;
  key?: string;
}

export interface IUnlockBottomSheetData {
  image: IImageWidget;
  heading: string;
  sub_heading: string;
  cta: ICtaWidget;
}

export interface IStockPerformanceVsIndexMyStocks {
  title: string;
  value: string;
  value_color: string;
  arrow: string;
}

export interface IStockPerformanceVsIndexWidgetTab {
  id: string;
  label: string;
  data: {
    my_stocks: IStockPerformanceVsIndexMyStocks;
    nifty_index: IStockPerformanceVsIndexMyStocks;
    persuasion: ICsPersuasion;
    unlock_data: IUnlockData;
  };
}

export interface IStockPerformanceVsIndexWidget {
  title: string;
  timestamp: string;
  tabs: IStockPerformanceVsIndexWidgetTab[];
  event_name?: string;
  key?: string;
}

export interface IAaEquityL1AnalyticsPageChildData {
  show_analytics_tab: boolean;
  view_event?: IViewEventDetails;
  trending_stocks_widget?: IAaTrendingStocksWidgetData;
  portfolio_analysis_widget?: IPortfolioAnalysisWidget;
  expert_analysis_widget: IExpertAnalysisWidget;
  stocks_valuation_widget: IStocksValuationWidget;
  your_portfolio_insights: IYourPortfolioInsights;
  pe_insights?: IExpertAnalysisWidget;
  beta_insights?: IBetaInsightsWidget;
  pe_portfolio_insights?: IBetaInsightsWidget;
  is_locked_state?: boolean;
  unlock_bottomsheet?: IUnlockBottomSheetData;
  stock_performance_vs_index_widget?: IStockPerformanceVsIndexWidget;
}

export interface IAaEquityL1AnalyticsPageData {
  data: IAaEquityL1AnalyticsPageChildData;
}

export type DonutChartData = Array<{
  group: string;
  value: number;
}>;