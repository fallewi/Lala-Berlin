!function(){function getStyles(config){ return "<style>"+config.selector+"{width:60px;}"+config.selector+" [class*=entypo-]:before{font-family:entypo,sans-serif}"+config.selector+" label{font-size:11px; display:block; line-height: 22px;letter-spacing:1px;cursor:pointer;margin:0;border:1px solid #585858;text-align:center; background:"+config.button_background+";color:"+config.button_color+";-webkit-transition:all .3s ease;transition:all .3s ease}"+config.selector+" label:hover{opacity:.8}"+config.selector+" label span{text-transform:uppercase;-webkit-font-smoothing:antialiased;}"+config.selector+" .social{-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;transform-origin:50% 0;-webkit-transform:scale(0) translateY(-65px);-ms-transform:scale(0) translateY(-65px);transform:scale(0) translateY(-65px);opacity:0;-webkit-transition:all .4s ease;transition:all .4s ease;}"+config.selector+" .social.active{opacity:1;-webkit-transition:all .4s ease;transition:all .4s ease}"+config.selector+" .social.active.center{margin-left:-23px}"+config.selector+" .social.active.left{margin-left:-115px}"+config.selector+" .social.active.right{margin-left:10px}"+config.selector+" .social.active.top{-webkit-transform:scale(1) translateY(-65px);-ms-transform:scale(1) translateY(-65px);transform:scale(1) translateY(-65px)}"+config.selector+" .social.active.top.center ul:after{margin:20px auto;border-top:15px solid #181818}"+config.selector+" .social.active.top.left ul:after{margin:35px 0 0 129px;border-top:20px solid #e34429}"+config.selector+" .social.active.top.right ul:after{margin:35px 0 0 10px;border-top:20px solid #6cdfea}"+config.selector+" .social.active.bottom{-webkit-transform:scale(1) translateY(45px);-ms-transform:scale(1) translateY(45px);transform:scale(1) translateY(45px);margin-top:-14px}"+config.selector+" .social.active.bottom.center ul:after{margin:-10px auto;border-bottom:20px solid #181818}"+config.selector+" .social.active.bottom.left ul:after{margin:-10px 0 0 129px;border-bottom:20px solid #e34429}"+config.selector+" .social.active.bottom.right ul:after{margin:-10px 0 0 10px;border-bottom:20px solid #6cdfea}"+config.selector+" .social ul{position:relative;left:0;right:0;width:120px;height:30px;color:#fff;background:#181818;margin:auto;padding:0;list-style:none}"+config.selector+" .social ul li{font-size:14px;cursor:pointer;width:40px;margin:0;padding:5px 0;text-align:center;float:left;display:block;height:20px;position:relative;z-index:2;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;-webkit-transition:all .3s ease;transition:all .3s ease}"+config.selector+" .social ul li:hover{color:rgba(255,255,255,.5)}"+config.selector+" .social ul:after{content:'';display:block;width:0;height:0;position:absolute;left:0;right:0;border-left:20px solid transparent;border-right:20px solid transparent}"+config.selector+" .social li[class*=twitter]{background:#181818;}"+config.selector+" .social li[class*=pinterest]{background:#181818;}</style>"};var $;

$ = jQuery.noConflict();

$.fn.share = function(opts) {
  var $body, $head;
  if ($(this).length === 0) {
    console.log("Share Button: No elements found.");
    return;
  }
  $head = $('head');
  $body = $('body');
  return $(this).each(function(i, el) {
    var $sharer, bubble, bubbles, click_link, close, config, open, parent, paths, set_opt, toggle,
      _this = this;
    $sharer = $(this);
    $sharer.addClass("sharer-" + i);
    $sharer.hide();
    if (opts == null) {
      opts = {};
    }
    config = {};
    config.url = opts.url || window.location.href;
    config.pinterest_media = $('.product-img-box .more-views img:first').attr('src');
    config.text = opts.text || $('meta[property="og:description"]').attr('content') || $('meta[name="twitter:description"]').attr('content') || $('meta[name="description"]').attr('content') || '';
    config.title = opts.title || $('meta[property="og:title"]').attr('content') || $('meta[name="twitter:title"]').attr('content');
    config.image = opts.image || $('meta[property="og:image"]').attr('content') || $('meta[name="twitter:image"]').attr('content');
    config.app_id = opts.app_id;
    config.flyout = opts.flyout || 'top center';
    config.text_font = typeof opts.text_font === 'boolean' ? opts.text_font : true;
    config.button_color = opts.color || '#222';
    config.button_background = opts.background || '#fff';
    config.button_icon = opts.icon || 'export';
    config.button_text = typeof opts.button_text === 'string' ? opts.button_text : 'Share';
    set_opt = function(base, ext) {
      if (opts[base]) {
        return opts[base][ext] || config[ext];
      } else {
        return config[ext];
      }
    };
    config.twitter_url = set_opt('twitter', 'url');
    config.twitter_text = set_opt('twitter', 'text');
    config.fb_url = set_opt('facebook', 'url');
    config.fb_title = set_opt('facebook', 'title');
    config.fb_caption = set_opt('facebook', 'caption');
    config.fb_text = set_opt('facebook', 'text');
    config.fb_image = set_opt('facebook', 'image');
    config.pinterest_url = set_opt('pinterest', 'url');
    config.selector = "." + ($sharer.attr('class').split(" ").join("."));
    config.twitter_text = encodeURIComponent(config.twitter_text);
    if (typeof config.app_id === 'integer') {
      config.app_id = config.app_id.toString();
    }
    config.protocol = opts.protocol || (['http', 'https'].indexOf(window.location.href.split(':')[0]) === -1 ? 'https://' : '//');
    if (!$('link[href="https://www.sharebutton.co/fonts/v2/entypo.min.css"]').length) {
      $("<link />").attr({
        rel: "stylesheet",
        href: "https://www.sharebutton.co/fonts/v2/entypo.min.css"
      }).appendTo($("head"));
    }
    if (!$("meta[name='sharer" + config.selector + "']").length) {
      $('head').append(getStyles(config)).append("<meta name='sharer" + config.selector + "'>");
    }
    if (config.text_font) {
      if (!$('link[href="' + config.protocol + 'fonts.googleapis.com/css?family=Lato:900"]').length) {
        $("<link />").attr({
          rel: "stylesheet",
          href: "" + config.protocol + "fonts.googleapis.com/css?family=Lato:900&text=" + config.button_text
        }).appendTo($("head"));
      }
    }
    $(this).html("<label class='entypo'><span>" + config.button_text + "</span></label><div class='social " + config.flyout + "'><ul><li class='entypo-twitter' data-network='twitter'></li><li class='entypo-facebook' data-network='facebook'></li><li class='entypo-pinterest' data-network='pinterest'></li></ul></div>");
    if (!window.FB && config.app_id && ($('#fb-root').length === 0)) {
      $body.append("<div id='fb-root'></div><script>(function(a,b,c){var d,e=a.getElementsByTagName(b)[0];a.getElementById(c)||(d=a.createElement(b),d.id=c,d.src='" + config.protocol + "connect.facebook.net/en_US/all.js#xfbml=1&appId=" + config.app_id + "',e.parentNode.insertBefore(d,e))})(document,'script','facebook-jssdk');</script>");
    }
    console.log(config.pinterest_media);
    paths = {
      twitter: "http://twitter.com/intent/tweet?text=" + config.twitter_text + "&url=" + config.twitter_url,
      facebook: "https://www.facebook.com/sharer/sharer.php?u=" + config.fb_url,
      pinterest: "http://pinterest.com/pin/create/button/?url=" + config.pinterest_url + "&media=" + config.pinterest_media
    };
    parent = $sharer.parent();
    bubbles = parent.find(".social");
    bubble = parent.find("" + config.selector + " .social");
    toggle = function(e) {
      e.stopPropagation();
      return bubble.toggleClass('active');
    };
    open = function() {
      return bubble.addClass('active');
    };
    close = function() {
      return bubble.removeClass('active');
    };
    click_link = function() {
      var link, popup;
      link = paths[$(this).data('network')];
      if (($(this).data('network') === 'facebook') && config.app_id) {
        if (!window.FB) {
          console.log("The Facebook JS SDK hasn't loaded yet.");
          return;
        }
        window.FB.ui({
          method: 'feed',
          name: config.fb_title,
          link: config.fb_url,
          picture: config.fb_image,
          caption: config.fb_caption,
          description: config.fb_text
        });
      } else {
        popup = {
          width: 500,
          height: 350
        };
        popup.top = (screen.height / 2) - (popup.height / 2);
        popup.left = (screen.width / 2) - (popup.width / 2);
        window.open(link, 'targetWindow', "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,left=" + popup.left + ",top=" + popup.top + ",width=" + popup.width + ",height=" + popup.height);
      }
      return false;
    };
    $sharer.find('label').on('click', toggle);
    $sharer.find('li').on('click', click_link);
    $body.on('click', function() {
      return bubbles.removeClass('active');
    });
    setTimeout((function() {
      return $sharer.show();
    }), 250);
    return {
      toggle: toggle.bind(this),
      open: open.bind(this),
      close: close.bind(this),
      options: config,
      self: this
    };
  });
};
}.call(this)