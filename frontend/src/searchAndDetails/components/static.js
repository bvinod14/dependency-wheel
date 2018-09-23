export const APIJSON = [
  {
    "name": "$exceptionHandler",
    "belongsTo": "factory"
  },
  {
    "name": "AccessTokenFlow",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "SignInUserFlow",
      "GlobalValues"
    ],
    "belongsTo": "service"
  },
  {
    "name": "AddressController",
    "dependency": [
      "$scope",
      "$state",
      "$window",
      "genericUtils",
      "ProfileModel",
      "$filter",
      "ngDialog",
      "$rootScope",
      "kohlsConstants",
      "$timeout",
      "GlobalValues",
      "$stateParams"
    ],
    "belongsTo": "register"
  },
  {
    "name": "AddressFlow",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "LoginUserFlow",
      "logger"
    ],
    "belongsTo": "service"
  },
  {
    "name": "AddressFormController",
    "dependency": [
      "$scope",
      "$state",
      "genericUtils",
      "kohlsConstants",
      "customValidator",
      "$filter",
      "logger",
      "$rootScope",
      "ErrorModel",
      "omniture",
      "$timeout",
      "ShoppingBagModel",
      "signal",
      "GlobalValues",
      "config",
      "AddressModel",
      "ShippingAddressModel"
    ],
    "belongsTo": "register"
  },
  {
    "name": "AddressListController",
    "dependency": [
      "$scope",
      "$state",
      "$window",
      "ProfileModel",
      "genericUtils",
      "omniture",
      "GlobalValues",
      "ShoppingBagModel",
      "signal",
      "$timeout",
      "kohlsConstants",
      "config"
    ],
    "belongsTo": "register"
  },
  {
    "name": "AddressMatchesController",
    "dependency": [
      "$scope",
      "$window",
      "GlobalValues",
      "kohlsConstants",
      "genericUtils",
      "$filter",
      "omniture"
    ],
    "belongsTo": "register"
  },
  {
    "name": "AddressModel",
    "dependency": [
      "AddressValidationFlow",
      "CountiesModel",
      "StateModel",
      "genericUtils",
      "ErrorModel",
      "config",
      "kohlsConstants"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "AddressNotVerifiedController",
    "dependency": [
      "$scope",
      "kohlsConstants",
      "GlobalValues",
      "$timeout",
      "genericUtils",
      "$filter",
      "$state",
      "omniture"
    ],
    "belongsTo": "register"
  },
  {
    "name": "AddressValidationFlow",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "ValidateAddressService",
      "config"
    ],
    "belongsTo": "service"
  },
  {
    "name": "AddressVerificationNeededController",
    "dependency": [
      "$scope",
      "$window",
      "AddressValidationFlow",
      "kohlsConstants",
      "$state",
      "GlobalValues",
      "$timeout",
      "genericUtils",
      "config"
    ],
    "belongsTo": "register"
  },
  {
    "name": "AlternatePickupPersonController",
    "dependency": [
      "$scope",
      "$state",
      "genericUtils",
      "kohlsConstants",
      "$rootScope"
    ],
    "belongsTo": "register"
  },
  {
    "name": "AlternatePickupPersonModel",
    "dependency": [],
    "belongsTo": "factory"
  },
  {
    "name": "AlternatePickupPersonsModel",
    "dependency": [
      "AlternatePickupPersonModel"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "ApplePayModel",
    "dependency": [
      "ErrorModel"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "ApplePayReviewController",
    "dependency": [
      "$scope",
      "$state",
      "$rootScope",
      "kohlsConstants",
      "genericUtils",
      "GlobalValues",
      "omniture",
      "PlaceOrderService",
      "ErrorModel",
      "$timeout",
      "config"
    ],
    "belongsTo": "register"
  },
  {
    "name": "BagItemDiscountModel",
    "belongsTo": "factory"
  },
  {
    "name": "BagItemDiscountsModel",
    "dependency": [
      "BagItemDiscountModel"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "BagItemModel",
    "dependency": [
      "BagItemDiscountModel",
      "ErrorModel",
      "ShippingMethodsModel",
      "ShippingMethodModel",
      "RegistryItemModel",
      "BagItemDiscountsModel",
      "DeliveryInfoModel"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "BagItemsModel",
    "dependency": [
      "BagItemModel"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "BaseController",
    "dependency": [
      "$state",
      "config",
      "cmsConfig",
      "$scope",
      "$stateParams",
      "kohlsConstants",
      "$rootScope",
      "GlobalValues",
      "logger",
      "omniture",
      "ErrorModel",
      "genericUtils",
      "$window",
      "signal",
      "CheckoutDetailsFlow",
      "$timeout",
      "MasterpassFlow",
      "MyInformationFlow",
      "$injector"
    ],
    "belongsTo": "register"
  },
  {
    "name": "BillingAddressFormController",
    "dependency": [
      "$scope",
      "$rootScope",
      "$state",
      "genericUtils",
      "kohlsConstants",
      "customValidator",
      "$controller",
      "BillingAddressModel",
      "UpdateBillingAddressFlow",
      "$filter",
      "GlobalValues",
      "config"
    ],
    "belongsTo": "register"
  },
  {
    "name": "BillingAddressModel",
    "dependency": [
      "AddressModel"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "BopusDeliveryMethodsFlow",
    "dependency": [
      "genericUtils",
      "StoreSearchService",
      "ProductInventoryService",
      "$filter",
      "StoreAddressModel",
      "StoreAddressesModel",
      "config"
    ],
    "belongsTo": "service"
  },
  {
    "name": "CalculateOrderService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService",
      "kohlsPlatform",
      "GlobalValues",
      "kohlsConstants",
      "config",
      "genericUtils"
    ],
    "belongsTo": "service"
  },
  {
    "name": "ChangeLocController",
    "dependency": [
      "$scope",
      "$state",
      "$http",
      "$window",
      "genericUtils",
      "CalculateOrderService",
      "ValidateAddressService",
      "ShippingAddressModel",
      "kohlsConstants",
      "logger",
      "CheckoutAccessTokenFlow",
      "ErrorModel"
    ],
    "belongsTo": "register"
  },
  {
    "name": "CheckoutAccessTokenFlow",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "$state",
      "AccessTokenFlow",
      "$rootScope"
    ],
    "belongsTo": "service"
  },
  {
    "name": "CheckoutController",
    "dependency": [
      "$scope",
      "$state",
      "$timeout",
      "genericUtils",
      "$rootScope",
      "omniture",
      "GlobalValues",
      "UpdateCartFlow",
      "$stateParams",
      "config"
    ],
    "belongsTo": "register"
  },
  {
    "name": "CheckoutDetailsFlow",
    "dependency": [
      "genericUtils",
      "CheckoutDetailsService",
      "ShoppingBagModel",
      "$state"
    ],
    "belongsTo": "service"
  },
  {
    "name": "CheckoutDetailsService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService",
      "MasterPassCheckoutModel",
      "config"
    ],
    "belongsTo": "service"
  },
  {
    "name": "CheckoutEditBillingAddressFormController",
    "dependency": [
      "$scope",
      "$state",
      "$window",
      "omniture",
      "$rootScope",
      "ShoppingBagModel",
      "ngDialog"
    ],
    "belongsTo": "register"
  },
  {
    "name": "CheckoutHeaderController",
    "dependency": [
      "$scope",
      "$state",
      "$timeout",
      "genericUtils",
      "$rootScope",
      "omniture",
      "GlobalValues",
      "UpdateCartFlow",
      "$stateParams"
    ],
    "belongsTo": "register"
  },
  {
    "name": "CheckoutPaymentMethodFormController",
    "dependency": [
      "$scope",
      "$state",
      "$controller",
      "KohlsError",
      "$window",
      "genericUtils",
      "kohlsConstants",
      "UpdatePaymentMethodFlow",
      "PaymentMethodModel",
      "omniture",
      "GlobalValues",
      "ngDialog",
      "$rootScope",
      "$timeout"
    ],
    "belongsTo": "register"
  },
  {
    "name": "CheckoutPaymentMethodListController",
    "dependency": [
      "$scope",
      "$state",
      "$controller",
      "$window"
    ],
    "belongsTo": "register"
  },
  {
    "name": "CmsService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService",
      "kohlsPlatform"
    ],
    "belongsTo": "service"
  },
  {
    "name": "CommunicationPreferencesFlow",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "UpdateProfileServiceV2",
      "CheckoutAccessTokenFlow",
      "MyInfoAccessTokenFlow",
      "GlobalValues",
      "SaleAlertsSubscriptionService",
      "config",
      "CmsService",
      "omniture"
    ],
    "belongsTo": "service"
  },
  {
    "name": "CountiesModel",
    "dependency": [
      "CountyModel"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "CountyModel",
    "belongsTo": "factory"
  },
  {
    "name": "CreateProfileService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService"
    ],
    "belongsTo": "service"
  },
  {
    "name": "CreditCardNumberMask",
    "belongsTo": "register"
  },
  {
    "name": "CustomerModel",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "config",
      "GlobalValues"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "CustomerStoreModel",
    "belongsTo": "factory"
  },
  {
    "name": "DateFormat",
    "belongsTo": "register"
  },
  {
    "name": "DeletePaymentTypeService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService"
    ],
    "belongsTo": "service"
  },
  {
    "name": "DeleteShippingAddressFlow",
    "dependency": [
      "DeleteShippingAddressService",
      "genericUtils",
      "kohlsConstants",
      "AddressFlow",
      "CheckoutAccessTokenFlow",
      "MyInfoAccessTokenFlow",
      "GlobalValues"
    ],
    "belongsTo": "service"
  },
  {
    "name": "DeleteShippingAddressService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService",
      "kohlsPlatform"
    ],
    "belongsTo": "service"
  },
  {
    "name": "DeliveryInfoModel",
    "dependency": [
      "DeliveryInfoTypeModel",
      "genericUtils",
      "GlobalValues"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "DeliveryInfoTypeModel",
    "dependency": [
      "StoreHoursModel",
      "AddressModel",
      "genericUtils",
      "GlobalValues"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "DiscountsController",
    "dependency": [
      "$scope",
      "$rootScope",
      "DiscountsFlow",
      "kohlsConstants",
      "genericUtils",
      "omniture",
      "ErrorMessages",
      "ErrorModel",
      "logger",
      "config",
      "PromoCodeModel",
      "KohlsCashModel",
      "ShoppingBagModel",
      "$timeout",
      "signal",
      "ngDialog",
      "loadJsService"
    ],
    "belongsTo": "register"
  },
  {
    "name": "DiscountsFlow",
    "dependency": [
      "OfferLookupService",
      "KohlsCashBalanceService",
      "genericUtils",
      "kohlsConstants",
      "logger",
      "config",
      "UpdateCartFlow",
      "GlobalValues"
    ],
    "belongsTo": "service"
  },
  {
    "name": "EliteKccAddSwitchBannerModel",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "config"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "EmptyShoppingBagController",
    "dependency": [
      "$scope",
      "$state",
      "genericUtils",
      "$stateParams",
      "ErrorModel",
      "$timeout",
      "omniture",
      "signal",
      "$rootScope",
      "LoginUserFlow",
      "logger",
      "kohlsConstants"
    ],
    "belongsTo": "register"
  },
  {
    "name": "ErrorMessages",
    "belongsTo": "service"
  },
  {
    "name": "ErrorModel",
    "dependency": [
      "kohlsConstants"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "FeeDetailModel",
    "belongsTo": "factory"
  },
  {
    "name": "FeeDetailsModel",
    "dependency": [
      "FeeDetailModel"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "GetBagItemsFlow",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "ShoppingBagModel",
      "LoginUserFlow",
      "KohlsError",
      "logger",
      "UpdateCartFlow",
      "$rootScope",
      "$state",
      "GlobalValues"
    ],
    "belongsTo": "service"
  },
  {
    "name": "GetCartService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService",
      "kohlsPlatform"
    ],
    "belongsTo": "service"
  },
  {
    "name": "GiftBoxModel",
    "belongsTo": "factory"
  },
  {
    "name": "GiftBoxesModel",
    "dependency": [
      "GiftBoxModel"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "GiftCardFormController",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "$scope",
      "ShoppingBagModel",
      "genericUtils",
      "KohlsError",
      "logger",
      "ErrorModel",
      "GlobalValues",
      "$timeout",
      "omniture"
    ],
    "belongsTo": "register"
  },
  {
    "name": "GiftCardModel",
    "dependency": [
      "ValidateGiftCardService"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "GiftCardsModel",
    "dependency": [
      "GiftCardModel",
      "genericUtils",
      "KohlsError"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "GiftInfoFormController",
    "dependency": [
      "$scope",
      "$state",
      "$rootScope"
    ],
    "belongsTo": "register"
  },
  {
    "name": "GiftItemListController",
    "dependency": [
      "$scope",
      "$state",
      "$timeout",
      "genericUtils",
      "kohlsConstants",
      "ShoppingBagModel",
      "GetBagItemsFlow",
      "$rootScope",
      "config",
      "$controller"
    ],
    "belongsTo": "register"
  },
  {
    "name": "GiftOptionsController",
    "dependency": [
      "$scope",
      "$state",
      "genericUtils",
      "$rootScope",
      "omniture",
      "kohlsConstants",
      "ShoppingBagModel",
      "GlobalValues",
      "ngDialog",
      "$timeout"
    ],
    "belongsTo": "register"
  },
  {
    "name": "GiftOptionsModel",
    "belongsTo": "factory"
  },
  {
    "name": "GlobalValues",
    "belongsTo": "value"
  },
  {
    "name": "GroupHeaderFilter",
    "belongsTo": "register"
  },
  {
    "name": "GroupItemModel",
    "dependency": [
      "BagItemsModel"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "GroupItemsModel",
    "dependency": [
      "GroupItemModel",
      "config",
      "kohlsConstants",
      "genericUtils",
      "ShippingMethodModel"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "GuestUserRewardsAndProfileFlow",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "RewardsAndProfileFlow",
      "CommunicationPreferencesFlow",
      "omniture"
    ],
    "belongsTo": "service"
  },
  {
    "name": "HeaderFilter",
    "belongsTo": "register"
  },
  {
    "name": "HoursModel",
    "dependency": [],
    "belongsTo": "factory"
  },
  {
    "name": "HtmlFilter",
    "dependency": [
      "$sce"
    ],
    "belongsTo": "register"
  },
  {
    "name": "IncentiveDetailModel",
    "dependency": [
      "config",
      "genericUtils"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "InlinePaymentMethodFormController",
    "dependency": [
      "$scope",
      "$state",
      "$controller",
      "KohlsError",
      "genericUtils",
      "kohlsConstants",
      "UpdatePaymentMethodFlow",
      "PaymentMethodModel",
      "$stateParams"
    ],
    "belongsTo": "register"
  },
  {
    "name": "KohlsCashBalanceService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService",
      "kohlsPlatform"
    ],
    "belongsTo": "service"
  },
  {
    "name": "KohlsCashModel",
    "dependency": [
      "ErrorModel"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "KohlsCashesModel",
    "dependency": [
      "KohlsCashModel",
      "ValidateKohlsCashService"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "KohlsError",
    "belongsTo": "service"
  },
  {
    "name": "KohlsOmnitureModel",
    "dependency": [
      "genericUtils"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "LocationFormController",
    "dependency": [
      "$scope",
      "$state",
      "genericUtils",
      "kohlsConstants",
      "customValidator",
      "logger",
      "$http",
      "$timeout",
      "ErrorModel"
    ],
    "belongsTo": "register"
  },
  {
    "name": "LoginUserFlow",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "SignInUserFlow",
      "GlobalValues"
    ],
    "belongsTo": "service"
  },
  {
    "name": "ManagePickupOptionsFormController",
    "dependency": [
      "$scope",
      "$state",
      "$rootScope",
      "genericUtils",
      "kohlsConstants",
      "omniture",
      "customValidator",
      "$window",
      "UpdateOrderFlow",
      "OrdersHistoryModel",
      "AlternatePickupPersonModel",
      "config"
    ],
    "belongsTo": "register"
  },
  {
    "name": "MaskFilter",
    "dependency": [
      "GlobalValues"
    ],
    "belongsTo": "register"
  },
  {
    "name": "MasterPassCheckoutModel",
    "belongsTo": "factory"
  },
  {
    "name": "MasterpassCheckoutFlow",
    "dependency": [
      "genericUtils",
      "CheckoutDetailsService",
      "ShoppingBagModel",
      "$state",
      "kohlsConstants",
      "GlobalValues"
    ],
    "belongsTo": "service"
  },
  {
    "name": "MasterpassFlow",
    "dependency": [
      "genericUtils",
      "CheckoutDetailsService",
      "ShoppingBagModel",
      "$state"
    ],
    "belongsTo": "service"
  },
  {
    "name": "ModalWindow",
    "dependency": [
      "$scope",
      "$document"
    ],
    "belongsTo": "register"
  },
  {
    "name": "ModifySigninInfoFlow",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "UpdateProfileServiceV2",
      "CheckoutAccessTokenFlow",
      "MyInfoAccessTokenFlow",
      "GlobalValues",
      "SaleAlertsSubscriptionService",
      "config",
      "CmsService",
      "omniture"
    ],
    "belongsTo": "service"
  },
  {
    "name": "MonetizationFlow",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "logger"
    ],
    "belongsTo": "service"
  },
  {
    "name": "MultiCountyWindow",
    "dependency": [
      "$scope",
      "$rootScope",
      "genericUtils"
    ],
    "belongsTo": "register"
  },
  {
    "name": "MyInfoAccessTokenFlow",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "$state",
      "AccessTokenFlow"
    ],
    "belongsTo": "service"
  },
  {
    "name": "MyInfoEditPaymentController",
    "dependency": [
      "$scope",
      "$state",
      "$controller",
      "KohlsError",
      "$window",
      "genericUtils",
      "kohlsConstants",
      "UpdatePaymentMethodFlow",
      "PaymentMethodModel",
      "omniture",
      "KohlsError",
      "config"
    ],
    "belongsTo": "register"
  },
  {
    "name": "MyInformationFlow",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "MyInfoAccessTokenFlow",
      "SignInUserFlow",
      "GlobalValues"
    ],
    "belongsTo": "service"
  },
  {
    "name": "MyInformationModel",
    "dependency": [
      "ProfileModel",
      "ShippingAddressesModel",
      "PaymentTypeModel"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "OfferAppliedController",
    "dependency": [
      "$scope",
      "$state",
      "$stateParams",
      "genericUtils"
    ],
    "belongsTo": "register"
  },
  {
    "name": "OfferLookupService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService",
      "kohlsPlatform"
    ],
    "belongsTo": "service"
  },
  {
    "name": "OrderConfirmationController",
    "dependency": [
      "$scope",
      "$state",
      "ShoppingBagModel",
      "genericUtils",
      "kohlsConstants",
      "RegisteredUserRewardsAndProfileFlow",
      "GuestUserRewardsAndProfileFlow",
      "omniture",
      "signal",
      "CmsService",
      "logger",
      "GlobalValues",
      "MonetizationFlow",
      "config",
      "$timeout",
      "CommunicationPreferencesFlow",
      "testNTarget",
      "$filter"
    ],
    "belongsTo": "register"
  },
  {
    "name": "OrderDetailsFlow",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "KohlsError",
      "fetchOrderDetailsService",
      "$rootScope",
      "OrdersAccessTokenFlow",
      "logger",
      "GlobalValues",
      "config"
    ],
    "belongsTo": "service"
  },
  {
    "name": "OrderDetailsModel",
    "dependency": [
      "ShipmentsModel",
      "TotalsModel",
      "BillingAddressModel",
      "PurchaseEarningsModel",
      "PaymentTypeModel",
      "GiftCardModel",
      "PaymentMethodModel",
      "KohlsCashModel",
      "kohlsConstants",
      "AlternatePickupPersonsModel",
      "TextNotificationModel",
      "ReturnKohlsCashCouponsModel",
      "CustomerModel",
      "genericUtils"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "OrderHistoryFlow",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "fetchOrderHistoryService",
      "MyInfoAccessTokenFlow",
      "$timeout"
    ],
    "belongsTo": "service"
  },
  {
    "name": "OrderHistoryModel",
    "dependency": [
      "OrderDetailsModel"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "OrderItemsCountModel",
    "belongsTo": "factory"
  },
  {
    "name": "OrderSummaryController",
    "dependency": [
      "$scope",
      "$state",
      "ShippingTaxModel",
      "genericUtils",
      "omniture",
      "kohlsConstants",
      "config",
      "GlobalValues",
      "$rootScope",
      "$timeout",
      "ngDialog",
      "LoginUserFlow"
    ],
    "belongsTo": "register"
  },
  {
    "name": "OrdersAccessTokenFlow",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "SignInUserFlow",
      "AccessTokenFlow"
    ],
    "belongsTo": "service"
  },
  {
    "name": "OrdersHistoryModel",
    "dependency": [
      "OrderHistoryModel",
      "kohlsConstants",
      "genericUtils"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "PaymentMethodController",
    "dependency": [
      "$scope",
      "$state",
      "ProfileModel",
      "genericUtils",
      "kohlsConstants",
      "customValidator",
      "$window",
      "$controller",
      "PaymentMethodModel",
      "UpdatePaymentMethodFlow",
      "omniture",
      "GlobalValues",
      "config",
      "signal",
      "ErrorModel",
      "fetchProfileKccPaymentService",
      "$timeout",
      "$rootScope"
    ],
    "belongsTo": "register"
  },
  {
    "name": "PaymentMethodFormController",
    "dependency": [
      "$scope",
      "paymentMethod",
      "KohlsError",
      "genericUtils",
      "kohlsConstants",
      "UpdatePaymentMethodFlow",
      "isGuest",
      "PaymentMethodModel",
      "customValidator",
      "$filter",
      "omniture",
      "$state",
      "GlobalValues",
      "ShoppingBagModel",
      "$stateParams",
      "config",
      "$timeout",
      "signal",
      "$rootScope"
    ],
    "belongsTo": "register"
  },
  {
    "name": "PaymentMethodListController",
    "dependency": [
      "$scope",
      "$state",
      "paymentMethods",
      "addPaymentMethodState",
      "isGuest",
      "$window",
      "billingAddress",
      "genericUtils",
      "UpdatePaymentMethodFlow",
      "omniture",
      "EliteKccAddSwitchBannerModel",
      "kohlsConstants",
      "GlobalValues",
      "ShoppingBagModel",
      "signal",
      "ngDialog",
      "$timeout",
      "$controller",
      "config"
    ],
    "belongsTo": "register"
  },
  {
    "name": "PaymentMethodModel",
    "dependency": [
      "kohlsConstants",
      "$filter",
      "ErrorModel",
      "config",
      "genericUtils"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "PaymentMethodsModel",
    "dependency": [
      "PaymentMethodModel",
      "kohlsConstants",
      "genericUtils"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "PaymentTypeController",
    "dependency": [
      "$scope",
      "$state",
      "genericUtils",
      "KohlsError",
      "$timeout",
      "kohlsConstants",
      "$rootScope",
      "ShoppingBagModel",
      "omniture",
      "CmsService",
      "logger",
      "ErrorModel",
      "$stateParams",
      "GlobalValues",
      "config",
      "CommunicationPreferencesFlow",
      "signal",
      "$controller",
      "ngDialog",
      "$timeout"
    ],
    "belongsTo": "register"
  },
  {
    "name": "PaymentTypeModel",
    "dependency": [
      "GiftCardsModel",
      "KohlsCashesModel",
      "PaymentMethodsModel",
      "PromoCodesModel",
      "ApplePayModel",
      "VisaCheckoutModel",
      "GlobalValues",
      "MasterPassCheckoutModel"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "PhoneMask",
    "belongsTo": "register"
  },
  {
    "name": "PickupOptionsFormController",
    "dependency": [
      "$scope",
      "$state",
      "$rootScope",
      "genericUtils",
      "kohlsConstants",
      "config",
      "customValidator",
      "AlternatePickupPersonModel",
      "ErrorModel",
      "ngDialog"
    ],
    "belongsTo": "register"
  },
  {
    "name": "PlaceOrderService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService",
      "kohlsPlatform",
      "GlobalValues",
      "kohlsConstants",
      "config",
      "genericUtils"
    ],
    "belongsTo": "service"
  },
  {
    "name": "PreferencesModel",
    "belongsTo": "factory"
  },
  {
    "name": "ProductInventoryService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService"
    ],
    "belongsTo": "service"
  },
  {
    "name": "ProfileModel",
    "dependency": [
      "CustomerModel",
      "ShippingAddressesModel",
      "BillingAddressModel",
      "PaymentTypeModel",
      "PreferencesModel"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "PromoCodeModel",
    "dependency": [
      "ErrorModel"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "PromoCodesModel",
    "dependency": [
      "PromoCodeModel"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "PurchaseEarningsModel",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "config"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "RegisteredUserRewardsAndProfileFlow",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "RewardsAndProfileFlow"
    ],
    "belongsTo": "service"
  },
  {
    "name": "RegistryItemModel",
    "dependency": [],
    "belongsTo": "factory"
  },
  {
    "name": "RemedyChallengePaymentsModel",
    "dependency": [
      "RemedyPaymentMethodModel",
      "kohlsConstants"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "RemedyPaymentMethodModel",
    "dependency": [
      "kohlsConstants",
      "$filter",
      "ErrorModel",
      "config"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "RestEndPoints",
    "belongsTo": "value"
  },
  {
    "name": "ReturnKohlsCashCouponsModel",
    "dependency": [],
    "belongsTo": "factory"
  },
  {
    "name": "ReviewController",
    "dependency": [
      "$scope",
      "$state",
      "ShoppingBagModel",
      "ShippingAddressesModel",
      "genericUtils",
      "PlaceOrderService",
      "kohlsConstants",
      "$rootScope",
      "omniture",
      "ErrorModel",
      "VXOConfirmationService",
      "GlobalValues",
      "CommunicationPreferencesFlow",
      "EliteKccAddSwitchBannerModel",
      "config",
      "UpdateCartFlow",
      "signal",
      "RemedyChallengePaymentsModel",
      "$timeout",
      "LoginUserFlow"
    ],
    "belongsTo": "register"
  },
  {
    "name": "ReviewOrderRemedyChallengeController",
    "dependency": [
      "$scope",
      "$state",
      "$stateParams",
      "ShoppingBagModel",
      "ShippingAddressesModel",
      "genericUtils",
      "PlaceOrderService",
      "kohlsConstants",
      "$rootScope",
      "omniture",
      "ErrorModel",
      "VXOConfirmationService",
      "GlobalValues",
      "CommunicationPreferencesFlow",
      "config",
      "UpdateCartFlow",
      "signal",
      "RemedyChallengePaymentsModel",
      "$anchorScroll"
    ],
    "belongsTo": "register"
  },
  {
    "name": "RewardsAndProfileFlow",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "CreateProfileService",
      "UpdateProfileServiceV2",
      "KohlsError",
      "UpdateBillingAddressFlow",
      "UpdateShippingAddressFlow",
      "UpdatePaymentMethodFlow",
      "config",
      "GlobalValues"
    ],
    "belongsTo": "service"
  },
  {
    "name": "SaleAlertsSubscriptionService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService",
      "kohlsPlatform"
    ],
    "belongsTo": "service"
  },
  {
    "name": "ShipmentModel",
    "dependency": [
      "ShippingAddressModel",
      "ShippingMethodModel",
      "BagItemsModel",
      "BagItemModel",
      "StoreAddressModel"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "ShipmentsModel",
    "dependency": [
      "ShipmentModel"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "ShippingAddressFormController",
    "dependency": [
      "$scope",
      "$state",
      "genericUtils",
      "kohlsConstants",
      "customValidator",
      "$controller",
      "$rootScope",
      "config"
    ],
    "belongsTo": "register"
  },
  {
    "name": "ShippingAddressModel",
    "dependency": [
      "AddressModel",
      "config",
      "kohlsConstants"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "ShippingAddressesModel",
    "dependency": [
      "ShippingAddressModel",
      "UpdateShippingAddressFlow",
      "DeleteShippingAddressFlow",
      "kohlsConstants",
      "config",
      "$filter"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "ShippingController",
    "dependency": [
      "$scope",
      "$state",
      "genericUtils",
      "kohlsConstants",
      "ProfileModel",
      "$rootScope",
      "omniture",
      "GlobalValues",
      "config",
      "signal",
      "ngDialog",
      "$timeout",
      "$stateParams",
      "AddressValidationFlow"
    ],
    "belongsTo": "register"
  },
  {
    "name": "ShippingMethodListController",
    "dependency": [
      "$scope",
      "$state",
      "$window",
      "genericUtils",
      "ShoppingBagModel",
      "BopusDeliveryMethodsFlow",
      "StoreAddressesModel",
      "StoreAddressModel",
      "logger",
      "kohlsConstants",
      "config",
      "UpdateCartFlow",
      "omniture",
      "$rootScope",
      "BagItemModel",
      "GlobalValues"
    ],
    "belongsTo": "register"
  },
  {
    "name": "ShippingMethodModel",
    "belongsTo": "factory"
  },
  {
    "name": "ShippingMethodsModel",
    "dependency": [
      "ShippingMethodModel"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "ShippingTaxController",
    "dependency": [
      "$scope",
      "$state",
      "genericUtils",
      "kohlsConstants",
      "logger",
      "omniture",
      "GlobalValues",
      "CmsService",
      "config",
      "ngDialog",
      "$rootScope"
    ],
    "belongsTo": "register"
  },
  {
    "name": "ShippingTaxModel",
    "dependency": [
      "StateModel",
      "CountiesModel"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "ShippingToAddressController",
    "dependency": [
      "$scope",
      "$state",
      "$window",
      "genericUtils"
    ],
    "belongsTo": "register"
  },
  {
    "name": "ShoppingBagController",
    "dependency": [
      "$scope",
      "$state",
      "backButtonService",
      "ShoppingBagModel",
      "genericUtils",
      "kohlsConstants",
      "$rootScope",
      "$controller",
      "config",
      "EliteKccAddSwitchBannerModel",
      "$timeout",
      "$stateParams",
      "ErrorModel",
      "$window"
    ],
    "belongsTo": "register"
  },
  {
    "name": "ShoppingBagModel",
    "dependency": [
      "GroupItemsModel",
      "TotalsModel",
      "PaymentTypeModel",
      "ShippingAddressesModel",
      "ShippingMethodsModel",
      "BillingAddressModel",
      "GiftOptionsModel",
      "CustomerModel",
      "PreferencesModel",
      "CalculateOrderService",
      "PlaceOrderService",
      "PromoCodesModel",
      "KohlsCashModel",
      "genericUtils",
      "CheckoutAccessTokenFlow",
      "kohlsConstants",
      "StoreAddressesModel",
      "OrderItemsCountModel",
      "CustomerStoreModel",
      "$rootScope",
      "$state",
      "AlternatePickupPersonsModel",
      "TextNotificationModel",
      "logger",
      "GlobalValues",
      "RemedyChallengePaymentsModel",
      "config",
      "IncentiveDetailModel",
      "$timeout"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "ShoppingInitController",
    "dependency": [
      "$scope",
      "$state",
      "ShoppingBagModel",
      "LoginUserFlow",
      "backButtonService",
      "genericUtils",
      "kohlsConstants",
      "ProfileModel",
      "KohlsError",
      "$rootScope",
      "omniture",
      "logger",
      "GlobalValues",
      "UpdateCartFlow",
      "config",
      "$stateParams",
      "ErrorModel",
      "$timeout",
      "GetBagItemsFlow",
      "signal",
      "$controller",
      "$window",
      "loadJsService"
    ],
    "belongsTo": "register"
  },
  {
    "name": "ShoppingListController",
    "dependency": [
      "$scope",
      "$state",
      "genericUtils",
      "kohlsConstants",
      "ShoppingBagModel",
      "GetBagItemsFlow",
      "KohlsError",
      "KohlsOmnitureModel",
      "omniture",
      "signal",
      "$rootScope",
      "UpdateCartFlow",
      "ErrorModel",
      "config",
      "GlobalValues",
      "$stateParams",
      "$filter",
      "loadJsService",
      "ngDialog",
      "$timeout"
    ],
    "belongsTo": "register"
  },
  {
    "name": "SignInUserFlow",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "GlobalValues",
      "$rootScope"
    ],
    "belongsTo": "service"
  },
  {
    "name": "StateModel",
    "dependency": [],
    "belongsTo": "factory"
  },
  {
    "name": "StoreAddressModel",
    "dependency": [
      "StoreHoursModel",
      "AddressModel",
      "genericUtils",
      "GlobalValues"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "StoreAddressesModel",
    "dependency": [
      "StoreAddressModel",
      "genericUtils"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "StoreDayModel",
    "dependency": [
      "HoursModel"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "StoreDaysModel",
    "dependency": [
      "StoreDayModel",
      "genericUtils"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "StoreHoursModel",
    "dependency": [
      "StoreDaysModel",
      "genericUtils"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "StoreSearchService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService"
    ],
    "belongsTo": "service"
  },
  {
    "name": "SurchargeTotalModel",
    "belongsTo": "factory"
  },
  {
    "name": "SurchargeTotalsModel",
    "dependency": [
      "SurchargeTotalModel"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "TextNotificationController",
    "dependency": [
      "$scope",
      "$state",
      "genericUtils",
      "kohlsConstants",
      "$rootScope"
    ],
    "belongsTo": "register"
  },
  {
    "name": "TextNotificationModel",
    "dependency": [],
    "belongsTo": "factory"
  },
  {
    "name": "TotalsModel",
    "dependency": [
      "GiftBoxesModel",
      "PurchaseEarningsModel",
      "SurchargeTotalsModel",
      "FeeDetailsModel"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "UpdateBillingAddressFlow",
    "dependency": [
      "AddressFlow",
      "UpdateBillingAddressService",
      "genericUtils",
      "kohlsConstants"
    ],
    "belongsTo": "service"
  },
  {
    "name": "UpdateBillingAddressService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService"
    ],
    "belongsTo": "service"
  },
  {
    "name": "UpdateCartFlow",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "CheckoutAccessTokenFlow",
      "UpdateCartService",
      "$rootScope",
      "logger",
      "config",
      "$timeout"
    ],
    "belongsTo": "service"
  },
  {
    "name": "UpdateCartService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService",
      "kohlsPlatform",
      "config"
    ],
    "belongsTo": "service"
  },
  {
    "name": "UpdateMyInformationFlow",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "UpdateProfileService",
      "CheckoutAccessTokenFlow",
      "MyInfoAccessTokenFlow",
      "GlobalValues",
      "SaleAlertsSubscriptionService",
      "config",
      "CmsService",
      "omniture"
    ],
    "belongsTo": "service"
  },
  {
    "name": "UpdateOrderFlow",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "KohlsError",
      "updateOrderService",
      "$rootScope",
      "OrdersAccessTokenFlow",
      "OrderDetailsFlow",
      "$timeout"
    ],
    "belongsTo": "service"
  },
  {
    "name": "UpdatePaymentMethodFlow",
    "dependency": [
      "UpdatePaymentMethodService",
      "genericUtils",
      "kohlsConstants",
      "DeletePaymentTypeService"
    ],
    "belongsTo": "service"
  },
  {
    "name": "UpdatePaymentMethodService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService"
    ],
    "belongsTo": "service"
  },
  {
    "name": "UpdateProfileService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService"
    ],
    "belongsTo": "service"
  },
  {
    "name": "UpdateProfileServiceV2",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService"
    ],
    "belongsTo": "service"
  },
  {
    "name": "UpdateShippingAddressFlow",
    "dependency": [
      "AddressFlow",
      "UpdateShippingAddressService",
      "UpdateBillingAddressService",
      "genericUtils",
      "kohlsConstants",
      "CheckoutAccessTokenFlow",
      "MyInfoAccessTokenFlow",
      "GlobalValues"
    ],
    "belongsTo": "service"
  },
  {
    "name": "UpdateShippingAddressService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService",
      "kohlsPlatform"
    ],
    "belongsTo": "service"
  },
  {
    "name": "VXOConfirmationService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService",
      "kohlsPlatform",
      "$rootScope",
      "$http",
      "kohlsConstants",
      "config"
    ],
    "belongsTo": "service"
  },
  {
    "name": "ValidateAddressService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService",
      "kohlsPlatform",
      "config",
      "genericUtils",
      "kohlsConstants"
    ],
    "belongsTo": "service"
  },
  {
    "name": "ValidateGiftCardService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService",
      "kohlsPlatform"
    ],
    "belongsTo": "service"
  },
  {
    "name": "ValidateKohlsCashService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService",
      "kohlsPlatform"
    ],
    "belongsTo": "service"
  },
  {
    "name": "VerifyAccountService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService",
      "kohlsPlatform"
    ],
    "belongsTo": "service"
  },
  {
    "name": "VerifyAddressController",
    "dependency": [
      "$scope",
      "$window",
      "$state",
      "$stateParams",
      "AddressModel",
      "genericUtils",
      "kohlsConstants",
      "$filter",
      "GlobalValues",
      "omniture",
      "$rootScope"
    ],
    "belongsTo": "register"
  },
  {
    "name": "VisaCheckoutController",
    "dependency": [
      "$scope",
      "$state",
      "backButtonService",
      "ShoppingBagModel",
      "genericUtils",
      "kohlsConstants",
      "$rootScope",
      "omniture",
      "logger",
      "$timeout",
      "GlobalValues",
      "ErrorModel",
      "config"
    ],
    "belongsTo": "register"
  },
  {
    "name": "VisaCheckoutModel",
    "belongsTo": "factory"
  },
  {
    "name": "addressMatches",
    "belongsTo": "directive"
  },
  {
    "name": "addressNotVerified",
    "dependency": [
      "$state"
    ],
    "belongsTo": "directive"
  },
  {
    "name": "addressVerificationNeeded",
    "belongsTo": "directive"
  },
  {
    "name": "addressyTypeahead",
    "dependency": [
      "kohlsConstants",
      "genericUtils",
      "omniture"
    ],
    "belongsTo": "directive"
  },
  {
    "name": "alphaNumericInput",
    "dependency": [
      "$parse",
      "kohlsConstants"
    ],
    "belongsTo": "directive"
  },
  {
    "name": "backButtonService",
    "dependency": [
      "$state",
      "omniture"
    ],
    "belongsTo": "service"
  },
  {
    "name": "baseRESTAdapterService",
    "dependency": [
      "genericUtils",
      "kohlsConstants",
      "logger",
      "config",
      "GlobalValues",
      "SignInUserFlow",
      "$rootScope",
      "RestEndPoints",
      "correlationIdProcessor",
      "ErrorModel"
    ],
    "belongsTo": "service"
  },
  {
    "name": "blurFocus",
    "belongsTo": "directive"
  },
  {
    "name": "capitalize",
    "belongsTo": "directive"
  },
  {
    "name": "cartTracker",
    "dependency": [
      "config"
    ],
    "belongsTo": "directive"
  },
  {
    "name": "charLimit",
    "dependency": [
      "$parse"
    ],
    "belongsTo": "directive"
  },
  {
    "name": "chooseSpeed",
    "dependency": [
      "genericUtils"
    ],
    "belongsTo": "directive"
  },
  {
    "name": "chooseSpeedOption",
    "dependency": [
      "config"
    ],
    "belongsTo": "directive"
  },
  {
    "name": "cmsConfig",
    "belongsTo": "value"
  },
  {
    "name": "cmsConfig",
    "dependency": {},
    "belongsTo": "value"
  },
  {
    "name": "config",
    "belongsTo": "value"
  },
  {
    "name": "correlationIdProcessor",
    "dependency": [
      "$state",
      "md5"
    ],
    "belongsTo": "service"
  },
  {
    "name": "creditCardMask",
    "dependency": [
      "$timeout",
      "$rootScope",
      "customValidator"
    ],
    "belongsTo": "directive"
  },
  {
    "name": "customValidator",
    "belongsTo": "service"
  },
  {
    "name": "dateofbirth",
    "belongsTo": "directive"
  },
  {
    "name": "deliveryOptionsListController",
    "dependency": [
      "$scope",
      "$state",
      "$window",
      "genericUtils",
      "ShoppingBagModel",
      "BopusDeliveryMethodsFlow",
      "StoreAddressesModel",
      "StoreAddressModel",
      "logger",
      "kohlsConstants",
      "config",
      "UpdateCartFlow",
      "omniture",
      "$rootScope",
      "BagItemModel",
      "GlobalValues",
      "ErrorModel"
    ],
    "belongsTo": "register"
  },
  {
    "name": "digitsOnly",
    "belongsTo": "directive"
  },
  {
    "name": "earnSummary",
    "dependency": [
      "config",
      "$filter",
      "genericUtils"
    ],
    "belongsTo": "directive"
  },
  {
    "name": "errorDisplayController",
    "dependency": [
      "$scope",
      "$window",
      "$rootScope",
      "genericUtils",
      "kohlsConstants",
      "config"
    ],
    "belongsTo": "register"
  },
  {
    "name": "fetchOrderDetailsService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService",
      "kohlsPlatform",
      "genericUtils"
    ],
    "belongsTo": "service"
  },
  {
    "name": "fetchOrderHistoryService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService",
      "kohlsPlatform"
    ],
    "belongsTo": "service"
  },
  {
    "name": "fetchProfileKccPaymentService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService",
      "kohlsPlatform"
    ],
    "belongsTo": "service"
  },
  {
    "name": "fetchProfileService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService",
      "kohlsPlatform"
    ],
    "belongsTo": "service"
  },
  {
    "name": "focusInput",
    "dependency": [
      "$timeout"
    ],
    "belongsTo": "directive"
  },
  {
    "name": "focusOn",
    "dependency": [
      "$timeout",
      "$window"
    ],
    "belongsTo": "directive"
  },
  {
    "name": "genericUtils",
    "dependency": [
      "kohlsConstants",
      "logger",
      "$filter",
      "$rootScope",
      "$window",
      "config",
      "$document",
      "$uibModal",
      "$location",
      "$state"
    ],
    "belongsTo": "service"
  },
  {
    "name": "googlePlaces",
    "belongsTo": "directive"
  },
  {
    "name": "hmSpinner",
    "dependency": [
      "$timeout"
    ],
    "belongsTo": "directive"
  },
  {
    "name": "infiniteScroll",
    "dependency": [
      "$parse",
      "$document",
      "$window",
      "$timeout"
    ],
    "belongsTo": "directive"
  },
  {
    "name": "iosNavigation",
    "dependency": [
      "genericUtils"
    ],
    "belongsTo": "directive"
  },
  {
    "name": "kohlsConstants",
    "belongsTo": "service"
  },
  {
    "name": "kohlsPlatform",
    "dependency": "android",
    "belongsTo": "constant"
  },
  {
    "name": "kohlsSignalModel",
    "dependency": [
      "genericUtils",
      "GlobalValues"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "loadJsService",
    "dependency": [
      "$q",
      "config"
    ],
    "belongsTo": "factory"
  },
  {
    "name": "logger",
    "belongsTo": "constant"
  },
  {
    "name": "masterpassCheckoutController",
    "dependency": [
      "$state",
      "config",
      "cmsConfig",
      "$scope",
      "$stateParams",
      "kohlsConstants",
      "$rootScope",
      "GlobalValues",
      "logger",
      "omniture",
      "ErrorModel",
      "genericUtils",
      "$window",
      "signal",
      "CheckoutDetailsFlow",
      "$timeout",
      "ShoppingBagModel",
      "MasterpassCheckoutFlow",
      "$location"
    ],
    "belongsTo": "register"
  },
  {
    "name": "ngConfirmClick",
    "dependency": [],
    "belongsTo": "directive"
  },
  {
    "name": "ngRemoveSpecialChars",
    "belongsTo": "directive"
  },
  {
    "name": "ngTrimSpace",
    "belongsTo": "directive"
  },
  {
    "name": "nuDataUtil",
    "dependency": [
      "kohlsConstants",
      "config",
      "ErrorModel",
      "genericUtils"
    ],
    "belongsTo": "service"
  },
  {
    "name": "numbersOnly",
    "belongsTo": "directive"
  },
  {
    "name": "omniture",
    "dependency": [
      "kohlsConstants",
      "KohlsOmnitureModel",
      "GlobalValues",
      "$rootScope",
      "config",
      "genericUtils",
      "$state"
    ],
    "belongsTo": "service"
  },
  {
    "name": "orderSummaryToggle",
    "belongsTo": "directive"
  },
  {
    "name": "passwordValidator",
    "dependency": [],
    "belongsTo": "directive"
  },
  {
    "name": "popover",
    "belongsTo": "directive"
  },
  {
    "name": "restrictNewlineChar",
    "belongsTo": "directive"
  },
  {
    "name": "signal",
    "dependency": [
      "kohlsConstants",
      "kohlsSignalModel",
      "GlobalValues",
      "$rootScope",
      "genericUtils"
    ],
    "belongsTo": "service"
  },
  {
    "name": "smartCart",
    "belongsTo": "directive"
  },
  {
    "name": "stcLinkConverter",
    "dependency": [
      "genericUtils",
      "kohlsConstants"
    ],
    "belongsTo": "directive"
  },
  {
    "name": "stickyHtml",
    "dependency": [
      "$timeout"
    ],
    "belongsTo": "directive"
  },
  {
    "name": "testNTarget",
    "dependency": [
      "GlobalValues",
      "genericUtils",
      "kohlsConstants"
    ],
    "belongsTo": "service"
  },
  {
    "name": "tooltip",
    "belongsTo": "directive"
  },
  {
    "name": "uiSelectRequired",
    "belongsTo": "directive"
  },
  {
    "name": "updateBagItemQuantity",
    "dependency": [
      "$timeout"
    ],
    "belongsTo": "directive"
  },
  {
    "name": "updateOrderService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService",
      "kohlsPlatform",
      "GlobalValues",
      "kohlsConstants"
    ],
    "belongsTo": "service"
  },
  {
    "name": "updatePaymentTypeService",
    "dependency": [
      "RestEndPoints",
      "baseRESTAdapterService",
      "kohlsPlatform"
    ],
    "belongsTo": "service"
  }
]