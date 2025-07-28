
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills.D8hiOd40.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app.DdXlAPGx.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/page-Information.CqfglbtW.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ButtonWithRegisterWebPixel.BJKmS63v.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/NoAddressLocationFullDetour.xru0-IrP.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection.DFWmMN8x.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useEditorShopPayNavigation.DO8K4TGm.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedPayment.BlATAuDh.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/app.DvF5UNzN.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ButtonWithRegisterWebPixel.9MjAB40w.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/NoAddressLocationFullDetour.CpG-8YkX.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DeliveryMethodSelectorSection.Cx21oFfE.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/useEditorShopPayNavigation.DCOTvxC3.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/VaultedPayment.OxMVm7u-.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/gill_sans_nova/gillsansnova_n4.2da9dee74f0a63d7b2be6f6817ac5c94c1e2aee8.woff2?h1=a25hdGNoYnVsbC5jb20&hmac=0fcdda5eaa00165f281b9c2ce5813ce5b7f5c020d1e877c187a85d4b6dffd05f","https://fonts.shopifycdn.com/gill_sans_nova/gillsansnova_n7.370e1db5ef6965d0a4cc36d2a2c7fccfa3cd1a8a.woff2?h1=a25hdGNoYnVsbC5jb20&hmac=4b4032c29257a3fda53c6963098f9b2e29a83ff94cd5a2f1f55d46347488155e","https://fonts.shopifycdn.com/goudy_old_style/goudyoldstyle_n4.8e0ac7e589c9a408f51fbdd8478dac6ac141be54.woff2?h1=a25hdGNoYnVsbC5jb20&hmac=9b04c285dfcc10a12848ff49332ed7ffff034afe93f92d7a1aa7524ee221d1ae","https://fonts.shopifycdn.com/goudy_old_style/goudyoldstyle_n7.09a992bb78e12224783769913f816782ea7e647e.woff2?h1=a25hdGNoYnVsbC5jb20&hmac=ac30fcd858c707062949c573465966eb8a13cc98ecd94c4c387e39aac7ec9215"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0566/8251/2574/files/Knatchbull_Primary_Logo_CMYK_SavileRowBrown_x320.png?v=1723641558"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  