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
    data: IAaEquityAccountsListPageDataChild
}

export declare type TextVariants = "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "small" | "overline" | "link";