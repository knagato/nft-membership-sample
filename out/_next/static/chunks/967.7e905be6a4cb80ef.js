"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[967],{83929:function(e,t,n){n.r(t),n.d(t,{URI_AVAILABLE:function(){return h},UserRejectedRequestError:function(){return d},WalletConnectConnector:function(){return p}});var r=n(26939);function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,i(e,t)}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function i(e,t){return i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},i(e,t)}function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e,t,n){return a=u()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&i(o,n.prototype),o},a.apply(null,arguments)}function s(e){var t="function"===typeof Map?new Map:void 0;return s=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return a(e,arguments,c(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),i(r,e)},s(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h="URI_AVAILABLE",d=function(e){function t(){var t;return(t=e.call(this)||this).name=t.constructor.name,t.message="The user rejected the request.",t}return o(t,e),t}(s(Error));function f(e){var t=e.supportedChainIds,n=e.rpc;return t||(n?Object.keys(n).map((function(e){return Number(e)})):void 0)}var p=function(e){function t(t){var n;return(n=e.call(this,{supportedChainIds:f(t)})||this).config=t,n.handleChainChanged=n.handleChainChanged.bind(l(n)),n.handleAccountsChanged=n.handleAccountsChanged.bind(l(n)),n.handleDisconnect=n.handleDisconnect.bind(l(n)),n}o(t,e);var r=t.prototype;return r.handleChainChanged=function(e){this.emitUpdate({chainId:e})},r.handleAccountsChanged=function(e){this.emitUpdate({account:e[0]})},r.handleDisconnect=function(){this.emitDeactivate()},r.activate=function(){try{var e=this,t=function(){return e.walletConnectProvider.on("chainChanged",e.handleChainChanged),e.walletConnectProvider.on("accountsChanged",e.handleAccountsChanged),e.walletConnectProvider.on("disconnect",e.handleDisconnect),Promise.resolve(e.walletConnectProvider.enable().then((function(e){return e[0]})).catch((function(e){if("User closed modal"===e.message)throw new d;throw e}))).then((function(t){return{provider:e.walletConnectProvider,account:t}}))},r=function(){if(!e.walletConnectProvider)return Promise.resolve(Promise.all([n.e(351),n.e(952),n.e(563)]).then(n.bind(n,44952)).then((function(e){var t;return null!=(t=null==e?void 0:e.default)?t:e}))).then((function(t){e.walletConnectProvider=new t(e.config)}))}();return Promise.resolve(r&&r.then?r.then(t):t())}catch(o){return Promise.reject(o)}},r.getProvider=function(){try{return Promise.resolve(this.walletConnectProvider)}catch(e){return Promise.reject(e)}},r.getChainId=function(){try{return Promise.resolve(this.walletConnectProvider.chainId)}catch(e){return Promise.reject(e)}},r.getAccount=function(){try{return Promise.resolve(this.walletConnectProvider.accounts).then((function(e){return e[0]}))}catch(e){return Promise.reject(e)}},r.deactivate=function(){this.walletConnectProvider&&(this.walletConnectProvider.removeListener("disconnect",this.handleDisconnect),this.walletConnectProvider.removeListener("chainChanged",this.handleChainChanged),this.walletConnectProvider.removeListener("accountsChanged",this.handleAccountsChanged),this.walletConnectProvider.disconnect())},r.close=function(){try{return this.emitDeactivate(),Promise.resolve()}catch(e){return Promise.reject(e)}},t}(r.Q)}}]);