





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" rel="stylesheet" href="css/frameworks-481a47a96965f6706fb41bae0d14b09a.css">
  <link crossorigin="anonymous" media="all" rel="stylesheet" href="css/site-0198872658a4cac60ef867c03bfa2406.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="css/github-292ff39286f37ebdd6c51cf6040f4191.css">
    
    
    
    

  <meta name="viewport" content="width=device-width">
  
  <title>node/CHANGELOG_V13.md at master · nodejs/node · GitHub</title>
    <meta name="description" content="Node.js JavaScript runtime :sparkles::turtle::rocket::sparkles: - nodejs/node">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="images/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta name="twitter:image:src" content="https://avatars1.githubusercontent.com/u/9950313?s=400&amp;v=4"><meta name="twitter:site" content="@github"><meta name="twitter:card" content="summary"><meta name="twitter:title" content="nodejs/node"><meta name="twitter:description" content="Node.js JavaScript runtime :sparkles::turtle::rocket::sparkles: - nodejs/node">
    <meta property="og:image" content="9950313"><meta property="og:site_name" content="GitHub"><meta property="og:type" content="object"><meta property="og:title" content="nodejs/node"><meta property="og:url" content="https://github.com/nodejs/node"><meta property="og:description" content="Node.js JavaScript runtime :sparkles::turtle::rocket::sparkles: - nodejs/node">

  <link rel="assets" href="https://github.githubassets.com/">
  
  

    <meta name="request-id" content="F31D:1031:34B783:6ADA79:5DD40D87" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

    <meta name="octolytics-host" content="collector.githubapp.com"><meta name="octolytics-app-id" content="github"><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event"><meta name="octolytics-dimension-request_id" content="F31D:1031:34B783:6ADA79:5DD40D87"><meta name="octolytics-dimension-region_edge" content="iad"><meta name="octolytics-dimension-region_render" content="iad"><meta name="octolytics-dimension-ga_id" content class="js-octo-ga-id"><meta name="octolytics-dimension-visitor_id" content="79803543360638343">

<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true">



    <meta name="google-analytics" content="UA-3769691-2">


<meta class="js-ga-set" name="dimension1" content="Logged Out">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content>

      <meta name="expected-hostname" content="github.com">

      <meta name="js-proxy-site-detection-payload" content="N2MzMzcxNTc0NDYyMDY4ZTFhZDZiNjlhNjFmNWM4OTc2YTAyYTQ0ODZlNTEyZWVhMWRmYzk4OTJlMzlmNTYyMnx7InJlbW90ZV9hZGRyZXNzIjoiMjQuMjUyLjE3My4xMTMiLCJyZXF1ZXN0X2lkIjoiRjMxRDoxMDMxOjM0Qjc4Mzo2QURBNzk6NURENDBEODciLCJ0aW1lc3RhbXAiOjE1NzQxNzgxODMsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="ACTIONS_V2_ON_MARKETPLACE,MARKETPLACE_FEATURED_BLOG_POSTS,MARKETPLACE_INVOICED_BILLING,MARKETPLACE_SOCIAL_PROOF_CUSTOMERS,MARKETPLACE_TRENDING_SOCIAL_PROOF,MARKETPLACE_RECOMMENDATIONS,MARKETPLACE_PENDING_INSTALLATIONS">

    <meta name="html-safe-nonce" content="81248a5b97004afbd9cf03610d9c1bc82c65531b">

  <meta http-equiv="x-pjax-version" content="6f88f15623a1a6c2cc7ad9dc50150e20">
  

      <link href="https://github.com/nodejs/node/commits/master.atom" rel="alternate" title="Recent Commits to node:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/nodejs/node git https://github.com/nodejs/node.git">

  <meta name="octolytics-dimension-user_id" content="9950313"><meta name="octolytics-dimension-user_login" content="nodejs"><meta name="octolytics-dimension-repository_id" content="27193779"><meta name="octolytics-dimension-repository_nwo" content="nodejs/node"><meta name="octolytics-dimension-repository_public" content="true"><meta name="octolytics-dimension-repository_is_fork" content="false"><meta name="octolytics-dimension-repository_network_root_id" content="27193779"><meta name="octolytics-dimension-repository_network_root_nwo" content="nodejs/node"><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false">


    <link rel="canonical" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V13.md" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="fonts/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="favicon_1.ico">

<meta name="theme-color" content="#1e2327">





  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-out env-production page-responsive page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <span class="Progress progress-pjax-loader position-fixed width-full js-pjax-loader-bar">
      <span class="progress-pjax-loader-bar top-0 left-0" style="width: 0%;"></span>
    </span>

    
    
    


        <header class="Header-old header-logged-out js-details-container Details position-relative f4 py-2" role="banner">
  <div class="container-lg d-lg-flex flex-items-center p-responsive">
    <div class="d-flex flex-justify-between flex-items-center">
        <a class="mr-4" href="index_53.html" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
          <svg height="32" class="octicon octicon-mark-github text-white" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
        </a>

          <div class="d-lg-none css-truncate css-truncate-target width-fit p-2">
            
              <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
    <a class="Header-link" href="nodejs_3.html">nodejs</a>
    /
    <a class="Header-link" href="node.html">node</a>


          </div>

        <div class="d-flex flex-items-center">
            <a href="join_1.html" class="d-inline-block d-lg-none f5 text-white no-underline border border-gray-dark rounded-2 px-2 py-1 mr-3 mr-sm-5" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;client_id&quot;:null,&quot;originating_request_id&quot;:&quot;F31D:1031:34B783:6ADA79:5DD40D87&quot;,&quot;originating_url&quot;:&quot;https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V13.md&quot;,&quot;referrer&quot;:&quot;https://nodejs.org/en/&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="0ed47333787d3ff6bfabd0e340ffec7b0b27d18bf994c7910129beb762937e93" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">
              Sign&nbsp;up
            </a>

          <button class="btn-link d-lg-none mt-1 js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
            <svg height="24" class="octicon octicon-three-bars text-white" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
          </button>
        </div>
    </div>

    <div class="HeaderMenu HeaderMenu--logged-out position-fixed top-0 right-0 bottom-0 height-fit position-lg-relative d-lg-flex flex-justify-between flex-items-center flex-auto">
      <div class="d-flex d-lg-none flex-justify-end border-bottom bg-gray-light p-3">
        <button class="btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
          <svg height="24" class="octicon octicon-x text-gray" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
        </button>
      </div>

        <nav class="mt-0 px-3 px-lg-0 mb-5 mb-lg-0" aria-label="Global">
          <ul class="d-lg-flex list-style-none">
              <li class="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                    Why GitHub?
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-absolute position-lg-relative">
                      <path d="M1,1l6.2,6L13,1"/>
                    </svg>
                  </summary>
                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                    <a href="features_1.html" class="py-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Features">Features <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a>
                    <ul class="list-style-none f5 pb-3">
                      <li class="edge-item-fix"><a href="code-review.html" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Code review">Code review</a></li>
                      <li class="edge-item-fix"><a href="project-management.html" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Project management">Project management</a></li>
                      <li class="edge-item-fix"><a href="integrations.html" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Integrations">Integrations</a></li>
                      <li class="edge-item-fix"><a href="actions.html" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Actions">Actions</a></li>
                          <li class="edge-item-fix"><a href="packages.html" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to GitHub Packages">Packages</a></li>
                      <li class="edge-item-fix"><a href="security_2.html" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Security">Security</a></li>
                      <li class="edge-item-fix"><a href="features_1.html#team-management" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Team management">Team management</a></li>
                      <li class="edge-item-fix"><a href="features_1.html#social-coding" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Social coding">Social coding</a></li>
                      <li class="edge-item-fix"><a href="features_1.html#documentation" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Documentation">Documentation</a></li>
                      <li class="edge-item-fix"><a href="features_1.html#code-hosting" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Code hosting">Code hosting</a></li>
                    </ul>

                    <ul class="list-style-none mb-0 border-lg-top pt-lg-3">
                      <li class="edge-item-fix"><a href="customer-stories.html" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Customer stories">Customer stories <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                      <li class="edge-item-fix"><a href="security_1.html" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Security">Security <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>
                  </div>
                </details>
              </li>
              <li class="border-bottom border-lg-bottom-0 mr-0 mr-lg-3">
                <a href="enterprise.html" class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, go to Enterprise">Enterprise</a>
              </li>

              <li class="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                    Explore
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-absolute position-lg-relative">
                      <path d="M1,1l6.2,6L13,1"/>
                    </svg>
                  </summary>

                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="explore.html" class="py-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Explore">Explore GitHub <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>

                    <h4 class="text-gray-light text-normal text-mono f5 mb-2 border-lg-top pt-lg-3">Learn &amp; contribute</h4>
                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="topics.html" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Topics">Topics</a></li>
                        <li class="edge-item-fix"><a href="collections.html" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Collections">Collections</a></li>
                      <li class="edge-item-fix"><a href="trending.html" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Trending">Trending</a></li>
                      <li class="edge-item-fix"><a href="index_54.html" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Learning lab">Learning Lab</a></li>
                      <li class="edge-item-fix"><a href="index_47.html" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Open source guides">Open source guides</a></li>
                    </ul>

                    <h4 class="text-gray-light text-normal text-mono f5 mb-2 border-lg-top pt-lg-3">Connect with others</h4>
                    <ul class="list-style-none mb-0">
                      <li class="edge-item-fix"><a href="events_3.html" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Events">Events</a></li>
                      <li class="edge-item-fix"><a href="index_51.html" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Community forum">Community forum</a></li>
                      <li class="edge-item-fix"><a href="index_49.html" class="py-2 pb-0 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to GitHub Education">GitHub Education</a></li>
                    </ul>
                  </div>
                </details>
              </li>

              <li class="border-bottom border-lg-bottom-0 mr-0 mr-lg-3">
                <a href="marketplace.html" class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, go to Marketplace">Marketplace</a>
              </li>

              <li class="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                    Pricing
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-absolute position-lg-relative">
                       <path d="M1,1l6.2,6L13,1"/>
                    </svg>
                  </summary>

                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-4 mt-0 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                    <a href="pricing.html" class="pb-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Pricing">Plans <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a>

                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="pricing.html#feature-comparison" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Compare plans">Compare plans</a></li>
                      <li class="edge-item-fix"><a href="contact_1.html" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Contact Sales">Contact Sales</a></li>
                    </ul>

                    <ul class="list-style-none mb-0 border-lg-top pt-lg-3">
                      <li class="edge-item-fix"><a href="nonprofit.html" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Nonprofits">Nonprofit <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                      <li class="edge-item-fix"><a href="index_49.html" class="py-2 pb-0 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Education">Education <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>
                  </div>
                </details>
              </li>
          </ul>
        </nav>

      <div class="d-lg-flex flex-items-center px-3 px-lg-0 text-center text-lg-left">
          <div class="d-lg-flex mb-3 mb-lg-0">
            <div class="header-search flex-self-stretch flex-lg-self-auto mr-0 mr-lg-3 mb-3 mb-lg-0 scoped-search site-scoped-search js-site-search position-relative js-jump-to" role="combobox" aria-owns="jump-to-results" aria-label="Search or jump to" aria-haspopup="listbox" aria-expanded="false">
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="27193779" data-scoped-search-url="/nodejs/node/search" data-unscoped-search-url="/search" action="/nodejs/node/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;">
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text" class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable" data-hotkey="s,/" name="q" value placeholder="Search" data-unscoped-placeholder="Search GitHub" data-scoped-placeholder="Search" autocapitalize="off" aria-autocomplete="list" aria-controls="jump-to-results" aria-label="Search" data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=av46WVk1IbQXkNBKBu2AReVfRsaXAb2n5yRxValBGnEkWVgE5mTNwvv4sioRt6mACt831KMU+g8DivPVP+UChw==" spellcheck="false" autocomplete="off">
          <input type="hidden" class="js-site-search-type-field" name="type">
            <img src="fonts/search-key-slash.svg" alt class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href>
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt aria-label="Team" src width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href>
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt aria-label="Team" src width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href>
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt aria-label="Team" src width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


</ul>

            </div>
      </label>
</form>  </div>
</div>

          </div>

        <a href="login_7.html" class="HeaderMenu-link no-underline mr-3" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;client_id&quot;:null,&quot;originating_request_id&quot;:&quot;F31D:1031:34B783:6ADA79:5DD40D87&quot;,&quot;originating_url&quot;:&quot;https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V13.md&quot;,&quot;referrer&quot;:&quot;https://nodejs.org/en/&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="d3a51b261a9f78d29e9c23399640fe0bdaa526677a3a3ffc79280aa1891e3b4c" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">
          Sign&nbsp;in
        </a>
          <a href="join_2.html" class="HeaderMenu-link d-inline-block no-underline border border-gray-dark rounded-1 px-2 py-1" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;client_id&quot;:null,&quot;originating_request_id&quot;:&quot;F31D:1031:34B783:6ADA79:5DD40D87&quot;,&quot;originating_url&quot;:&quot;https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V13.md&quot;,&quot;referrer&quot;:&quot;https://nodejs.org/en/&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="d3a51b261a9f78d29e9c23399640fe0bdaa526677a3a3ffc79280aa1891e3b4c" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">
            Sign&nbsp;up
          </a>
      </div>
    </div>
  </div>
</header>

  </div>

  <div id="start-of-content" class="show-on-focus"></div>


    <div id="js-flash-container">

</div>



  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class>
    <main>
      


  



  









  <div class=" pagehead repohead instapaper_ignore readability-menu experiment-repo-nav pt-0 pt-lg-4 ">
    <div class="repohead-details-container clearfix container-lg p-responsive d-none d-lg-block">

      <ul class="pagehead-actions">




  <li>
    
  <a class="tooltipped tooltipped-s btn btn-sm btn-with-count" aria-label="You must be signed in to watch a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;notification subscription menu watch&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;client_id&quot;:null,&quot;originating_request_id&quot;:&quot;F31D:1031:34B783:6ADA79:5DD40D87&quot;,&quot;originating_url&quot;:&quot;https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V13.md&quot;,&quot;referrer&quot;:&quot;https://nodejs.org/en/&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="22369b846de536f5f84a8a4ff855dc67c1ffdf567abd9fc60e93cb733d8e39cc" href="login_8.html">
    <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
</a>    <a class="social-count" href="watchers.html" aria-label="2925 users are watching this repository">
      2.9k
    </a>

  </li>

  <li>
        <a class="btn btn-sm btn-with-count tooltipped tooltipped-s" aria-label="You must be signed in to star a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:27193779,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;client_id&quot;:null,&quot;originating_request_id&quot;:&quot;F31D:1031:34B783:6ADA79:5DD40D87&quot;,&quot;originating_url&quot;:&quot;https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V13.md&quot;,&quot;referrer&quot;:&quot;https://nodejs.org/en/&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="f8f462ba961dfb14bcb7d87cd69be16a0887a546592ae3b69074ac4bd1d9e9de" href="login_8.html">
      <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
      Star
</a>
    <a class="social-count js-social-count" href="stargazers.html" aria-label="65800 users starred this repository">
      65.8k
    </a>

  </li>

  <li>
      <a class="btn btn-sm btn-with-count tooltipped tooltipped-s" aria-label="You must be signed in to fork a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;repo details fork button&quot;,&quot;repository_id&quot;:27193779,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;client_id&quot;:null,&quot;originating_request_id&quot;:&quot;F31D:1031:34B783:6ADA79:5DD40D87&quot;,&quot;originating_url&quot;:&quot;https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V13.md&quot;,&quot;referrer&quot;:&quot;https://nodejs.org/en/&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="2902c81c75f303cc1aa3f20abca1abb326c5c24375eb45c3b494906e84f76927" href="login_8.html">
        <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
</a>
    <a href="members_1.html" class="social-count" aria-label="15465 users forked this repository">
      15.5k
    </a>
  </li>
</ul>

      <h1 class="public ">
    <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" data-hovercard-type="organization" data-hovercard-url="/orgs/nodejs/hovercard" href="nodejs_3.html">nodejs</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="node.html">node</a></strong>
  

</h1>

    </div>
    
<nav class="hx_reponav reponav js-repo-nav js-sidenav-container-pjax container-lg p-responsive d-none d-lg-block" itemscope itemtype="http://schema.org/BreadcrumbList" aria-label="Repository" data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /nodejs/node" href="node.html">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /nodejs/node/issues" href="issues_2.html">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">876</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /nodejs/node/pulls" href="pulls.html">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0010 15a1.993 1.993 0 001-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v6.56A1.993 1.993 0 002 15a1.993 1.993 0 001-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">355</span>
      <meta itemprop="position" content="3">
</a>  </span>


    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /nodejs/node/projects" href="projects_1.html">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      Projects
      <span class="Counter">3</span>
</a>


    <a data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy code_scanning /nodejs/node/security/advisories" href="advisories.html">
      <svg class="octicon octicon-shield" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 2l7-2 7 2v6.02C14 12.69 8.69 16 7 16c-1.69 0-7-3.31-7-7.98V2zm1 .75L7 1l6 1.75v5.268C13 12.104 8.449 15 7 15c-1.449 0-6-2.896-6-6.982V2.75zm1 .75L7 2v12c-1.207 0-5-2.482-5-5.985V3.5z"/></svg>
      Security
</a>
    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse people /nodejs/node/pulse" href="pulse.html">
      <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
      Insights
</a>

</nav>

  <div class="reponav-wrapper reponav-small d-lg-none">
  <nav class="reponav js-reponav text-center no-wrap" itemscope itemtype="http://schema.org/BreadcrumbList">

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a class="js-selected-navigation-item selected reponav-item" itemprop="url" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /nodejs/node" href="node.html">
        <span itemprop="name">Code</span>
        <meta itemprop="position" content="1">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /nodejs/node/issues" href="issues_2.html">
          <span itemprop="name">Issues</span>
          <span class="Counter">876</span>
          <meta itemprop="position" content="2">
</a>      </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /nodejs/node/pulls" href="pulls.html">
        <span itemprop="name">Pull requests</span>
        <span class="Counter">355</span>
        <meta itemprop="position" content="3">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /nodejs/node/projects" href="projects_1.html">
          <span itemprop="name">Projects</span>
          <span class="Counter">3</span>
          <meta itemprop="position" content="4">
</a>      </span>


      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy code_scanning /nodejs/node/security/advisories" href="advisories.html">
        <span itemprop="name">Security</span>
        <meta itemprop="position" content="6">
</a>
      <a class="js-selected-navigation-item reponav-item" data-selected-links="pulse /nodejs/node/pulse" href="pulse.html">
        Pulse
</a>

  </nav>
</div>


  </div>
<div class="container-lg clearfix new-discussion-timeline experiment-repo-nav  p-responsive">
  <div class="repository-content ">

    
    


  


    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="CHANGELOG_V13_1.md">Permalink</a>

    <!-- blob contrib key: blob_contributors:v21:b1009dda8f5a751c99f51ceb859aa192 -->
          <div class="signup-prompt-bg rounded-1">
      <div class="signup-prompt p-4 text-center mb-4 rounded-1">
        <div class="position-relative">
          <!-- '"` --><!-- </textarea></xmp> --><form action="/prompt_dismissals/signup" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;"><input type="hidden" name="_method" value="put"><input type="hidden" name="authenticity_token" value="aw13hX+Bajy9WNNfk5AD9bw/eXCLiF+zj9yO07sLy3asGK9vv7XW0zgzfplLYopBFgYmnirIM3GB2W8Ji/klsg==">
            <button type="submit" class="position-absolute top-0 right-0 btn-link link-gray" data-ga-click="(Logged out) Sign up prompt, clicked Dismiss, text:dismiss">
              Dismiss
            </button>
</form>          <h3 class="pt-2">Join GitHub today</h3>
          <p class="col-6 mx-auto">GitHub is home to over 40 million developers working together to host and review code, manage projects, and build software together.</p>
          <a class="btn btn-primary" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;files signup prompt&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;client_id&quot;:null,&quot;originating_request_id&quot;:&quot;F31D:1031:34B783:6ADA79:5DD40D87&quot;,&quot;originating_url&quot;:&quot;https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V13.md&quot;,&quot;referrer&quot;:&quot;https://nodejs.org/en/&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="feff2f5aa997094ebeeb6520c45311afca404c2740e64169cc95dd760c7ed359" data-ga-click="(Logged out) Sign up prompt, clicked Sign up, text:sign-up" href="join_3.html">Sign up</a>
        </div>
      </div>
    </div>


    <div class="d-flex flex-items-start flex-shrink-0 pb-3 flex-column flex-md-row">
      <span class="d-flex flex-justify-between width-full width-md-auto">
        
<details class="details-reset details-overlay select-menu branch-select-menu  hx_rsm" id="branch-select-menu">
  <summary class="btn btn-sm select-menu-button css-truncate" data-hotkey="w" title="Switch branches or tags">
    <i>Branch:</i>
    <span class="css-truncate-target" data-menu-button>master</span>
  </summary>

  <details-menu class="select-menu-modal hx_rsm-modal position-absolute" style="z-index: 99;" src="/nodejs/node/ref-list/master/doc/changelogs/CHANGELOG_V13.md?source_action=show&amp;source_controller=blob" preload>
    <include-fragment class="select-menu-loading-overlay anim-pulse">
      <svg height="32" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/></svg>
    </include-fragment>
  </details-menu>
</details>

        <div class="BtnGroup flex-shrink-0 d-md-none">
          <a href="master.html" class="js-pjax-capture-input btn btn-sm BtnGroup-item" data-pjax data-hotkey="t">
            Find file
          </a>
          <clipboard-copy value="doc/changelogs/CHANGELOG_V13.md" class="btn btn-sm BtnGroup-item">
            Copy path
          </clipboard-copy>
        </div>
      </span>
      <h2 id="blob-path" class="breadcrumb flex-auto min-width-0 text-normal flex-md-self-center ml-md-2 mr-md-3 my-2 my-md-0">
        <span class="js-repo-root text-bold"><span class="js-path-segment"><a data-pjax="true" href="node.html"><span>node</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="doc.html"><span>doc</span></a></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="changelogs.html"><span>changelogs</span></a></span><span class="separator">/</span><strong class="final-path">CHANGELOG_V13.md</strong>
      </h2>

      <div class="BtnGroup flex-shrink-0 d-none d-md-inline-block">
        <a href="master.html" class="js-pjax-capture-input btn btn-sm BtnGroup-item" data-pjax data-hotkey="t">
          Find file
        </a>
        <clipboard-copy value="doc/changelogs/CHANGELOG_V13.md" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
    </div>



    
  <div class="Box Box--condensed d-flex flex-column flex-shrink-0">
      <div class="Box-body d-flex flex-justify-between bg-blue-light flex-column flex-md-row flex-items-start flex-md-items-center">
        <span class="pr-md-4 f6">
          <a rel="contributor" data-skip-pjax="true" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=2352663" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="targos.html"><img class="avatar" src="2352663" width="20" height="20" alt="@targos"></a>
          <a class="text-bold link-gray-dark lh-default v-align-middle" rel="contributor" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=2352663" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="targos.html">targos</a>
            <span class="lh-default v-align-middle">
              <a data-pjax="true" title="2019-11-05, Version 13.1.0 (Current)

Notable changes:

* cli:
  * Added a new flag (`--trace-uncaught`) that makes Node.js print the
    stack trace at the time of throwing uncaught exceptions, rather than
    at the creation of the `Error` object, if there is any. This is
    disabled by default because it affects GC behavior.
    https://github.com/nodejs/node/pull/30025
* crypto
  * Added `Hash.prototype.copy()` method. It returns a new `Hash` object
    with its internal state cloned from the original one.
    https://github.com/nodejs/node/pull/29910
* dgram
  * Added source-specific multicast support. This adds methods to
    Datagram sockets to support RFC 4607
    (https://tools.ietf.org/html/rfc4607) for IPv4 and IPv6.
    https://github.com/nodejs/node/pull/15735
* fs
  * Added a `bufferSize` option to `fs.opendir()`. It allows to control
    the number of entries that are buffered internally when reading from
    the directory. https://github.com/nodejs/node/pull/30114
* meta
  * Added Chengzhong Wu (https://github.com/legendecas) to
    collaborators. https://github.com/nodejs/node/pull/30115

PR-URL: https://github.com/nodejs/node/pull/30262" class="link-gray" href="309e1eae797d3060126ef2e13ee0ab124808f575.html">2019-11-05, Version 13.1.0 (Current)</a>
            </span>
        </span>
        <span class="d-inline-block flex-shrink-0 v-align-bottom f6 mt-2 mt-md-0">
          <a class="pr-2 text-mono link-gray" href="309e1eae797d3060126ef2e13ee0ab124808f575.html" data-pjax>309e1ea</a>
          <relative-time datetime="2019-11-05T18:39:20Z" class="no-wrap">Nov 5, 2019</relative-time>
        </span>
      </div>

    <div class="Box-body d-flex flex-items-center flex-auto f6 border-bottom-0 flex-wrap">
      <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark float-left mr-2" id="blob_contributors_box">
        <summary class="btn-link">
          <span><strong>3</strong> contributors</span>
        </summary>
        <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast" aria-label="Users who have contributed to this file" src="/nodejs/node/contributors-list/master/doc/changelogs/CHANGELOG_V13.md" preload>
          <div class="Box-header">
            <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
              <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
            </button>
            <h3 class="Box-title">
              Users who have contributed to this file
            </h3>
          </div>
          <include-fragment class="octocat-spinner my-3" aria-label="Loading..."></include-fragment>
        </details-dialog>
      </details>
        <span class>
    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=2352663" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="CHANGELOG_V13_5.md">
      <img class="avatar mr-1" src="2352663" width="20" height="20" alt="@targos"> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=498775" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="CHANGELOG_V13_4.md">
      <img class="avatar mr-1" src="498775" width="20" height="20" alt="@MylesBorins"> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=8297234" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="CHANGELOG_V13_6.md">
      <img class="avatar mr-1" src="8297234" width="20" height="20" alt="@BethGriggs"> 
</a>
</span>

    </div>
  </div>





    <div class="Box mt-3 position-relative">
      
<div class="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center">
  <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">

      374 lines (351 sloc)
      <span class="file-info-divider"></span>
    49.1 KB
  </div>

  <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="CHANGELOG_V13_2.md">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="CHANGELOG_V13_3.md">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="CHANGELOG_V13_7.md">History</a>
    </div>


    <div>

          <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw" aria-label="You must be signed in to make or propose changes">
            <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 011.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
          <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw" aria-label="You must be signed in to make or propose changes">
            <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
    </div>
  </div>
</div>




      
  <div id="readme" class="Box-body readme blob instapaper_body js-code-block-container">
    <article class="markdown-body entry-content p-3 p-md-6" itemprop="text"><h1><a id="user-content-nodejs-13-changelog" class="anchor" aria-hidden="true" href="#nodejs-13-changelog"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Node.js 13 ChangeLog</h1>


<table>
<tbody><tr>
<th>Current</th>
</tr>
<tr>
<td>
<a href="#13.1.0">13.1.0</a><br>
<a href="#13.0.1">13.0.1</a><br>
<a href="#13.0.0">13.0.0</a><br>
</td>
</tr>
</tbody></table>
<ul>
<li>Other Versions
<ul>
<li><a href="CHANGELOG_V12.md">12.x</a></li>
<li><a href="CHANGELOG_V11.md">11.x</a></li>
<li><a href="CHANGELOG_V10.md">10.x</a></li>
<li><a href="CHANGELOG_V9.md">9.x</a></li>
<li><a href="CHANGELOG_V8.md">8.x</a></li>
<li><a href="CHANGELOG_V7.md">7.x</a></li>
<li><a href="CHANGELOG_V6.md">6.x</a></li>
<li><a href="CHANGELOG_V5.md">5.x</a></li>
<li><a href="CHANGELOG_V4.md">4.x</a></li>
<li><a href="CHANGELOG_V012.md">0.12.x</a></li>
<li><a href="CHANGELOG_V010.md">0.10.x</a></li>
<li><a href="CHANGELOG_IOJS.md">io.js</a></li>
<li><a href="CHANGELOG_ARCHIVE.md">Archive</a></li>
</ul>
</li>
</ul>
<p><a id="user-content-13.1.0"></a></p>
<h2><a id="user-content-2019-11-05-version-1310-current-targos" class="anchor" aria-hidden="true" href="#2019-11-05-version-1310-current-targos"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>2019-11-05, Version 13.1.0 (Current), @targos</h2>
<h3><a id="user-content-notable-changes" class="anchor" aria-hidden="true" href="#notable-changes"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Notable Changes</h3>
<ul>
<li><strong>cli</strong>:
<ul>
<li>Added a new flag (<code>--trace-uncaught</code>) that makes Node.js print the stack
trace at the time of throwing uncaught exceptions, rather than at the
creation of the <code>Error</code> object, if there is any. This is disabled by default
because it affects GC behavior (Anna Henningsen) <a href="30025.html">#30025</a>.</li>
</ul>
</li>
<li><strong>crypto</strong>:
<ul>
<li>Added <code>Hash.prototype.copy()</code> method. It returns a new <code>Hash</code> object with
its internal state cloned from the original one (Ben Noordhuis) <a href="29910.html">#29910</a>.</li>
</ul>
</li>
<li><strong>dgram</strong>:
<ul>
<li>Added source-specific multicast support. This adds methods to Datagram
sockets to support <a href="rfc4607.html" rel="nofollow">RFC 4607</a> for IPv4
and IPv6 (Lucas Pardue) <a href="15735.html">#15735</a>.</li>
</ul>
</li>
<li><strong>fs</strong>:
<ul>
<li>Added a <code>bufferSize</code> option to <code>fs.opendir()</code>. It allows to control the
number of entries that are buffered internally when reading from the
directory (Anna Henningsen) <a href="30114.html">#30114</a>.</li>
</ul>
</li>
<li><strong>meta</strong>:
<ul>
<li>Added <a href="legendecas.html">Chengzhong Wu</a> to collaborators <a href="30115.html">#30115</a>.</li>
</ul>
</li>
</ul>
<h3><a id="user-content-commits" class="anchor" aria-hidden="true" href="#commits"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Commits</h3>
<ul>
<li>[<a href="445837851b.html"><code>445837851b</code></a>] - <strong>async_hooks</strong>: only emit <code>after</code> for AsyncResource if stack not empty (Anna Henningsen) <a href="30087.html">#30087</a></li>
<li>[<a href="8860bd68b6.html"><code>8860bd68b6</code></a>] - <strong>buffer</strong>: improve performance caused by primordials (Jizu Sun) <a href="30235.html">#30235</a></li>
<li>[<a href="1bded9841c.html"><code>1bded9841c</code></a>] - <strong>build</strong>: fix detection of Visual Studio 2017 (Richard Lau) <a href="30119.html">#30119</a></li>
<li>[<a href="49e7f042f9.html"><code>49e7f042f9</code></a>] - <strong>build</strong>: add workaround for WSL (gengjiawen) <a href="30221.html">#30221</a></li>
<li>[<a href="03827ddf38.html"><code>03827ddf38</code></a>] - <strong>build</strong>: allow Python 3.8 (Michaël Zasso) <a href="30194.html">#30194</a></li>
<li>[<a href="54698113c0.html"><code>54698113c0</code></a>] - <strong>build</strong>: find Python syntax errors in dependencies (Christian Clauss) <a href="30143.html">#30143</a></li>
<li>[<a href="b255688d5f.html"><code>b255688d5f</code></a>] - <strong>build</strong>: fix pkg-config search for libnghttp2 (Ben Noordhuis) <a href="30145.html">#30145</a></li>
<li>[<a href="8980d8c25f.html"><code>8980d8c25f</code></a>] - <strong>build</strong>: vcbuild uses default Python, not Py2 (João Reis) <a href="30091.html">#30091</a></li>
<li>[<a href="cedad02406.html"><code>cedad02406</code></a>] - <strong>build</strong>: prefer python 3 over 2 for configure (Sam Roberts) <a href="30091.html">#30091</a></li>
<li>[<a href="5ba842b8f9.html"><code>5ba842b8f9</code></a>] - <strong>build</strong>: python3 support for configure (Rod Vagg) <a href="30047.html">#30047</a></li>
<li>[<a href="d05f67caef.html"><code>d05f67caef</code></a>] - <strong>cli</strong>: whitelist new V8 flag in NODE_OPTIONS (Shelley Vohr) <a href="30094.html">#30094</a></li>
<li>[<a href="5ca58646c1.html"><code>5ca58646c1</code></a>] - <strong>(SEMVER-MINOR)</strong> <strong>cli</strong>: add --trace-uncaught flag (Anna Henningsen) <a href="30025.html">#30025</a></li>
<li>[<a href="8b75aabee9.html"><code>8b75aabee9</code></a>] - <strong>crypto</strong>: guard with OPENSSL_NO_GOST (Shelley Vohr) <a href="30050.html">#30050</a></li>
<li>[<a href="1d03df4c5e.html"><code>1d03df4c5e</code></a>] - <strong>(SEMVER-MINOR)</strong> <strong>crypto</strong>: add Hash.prototype.copy() method (Ben Noordhuis) <a href="29910.html">#29910</a></li>
<li>[<a href="46c9194ec8.html"><code>46c9194ec8</code></a>] - <strong>deps</strong>: V8: cherry-pick a7dffcd767be (Christian Clauss) <a href="30218.html">#30218</a></li>
<li>[<a href="104bfb9a38.html"><code>104bfb9a38</code></a>] - <strong>deps</strong>: V8: cherry-pick e5dbc95 (Gabriel Schulhof) <a href="30130.html">#30130</a></li>
<li>[<a href="e3124481c2.html"><code>e3124481c2</code></a>] - <strong>deps</strong>: update npm to 6.12.1 (Michael Perrotte) <a href="30164.html">#30164</a></li>
<li>[<a href="f3d00c594d.html"><code>f3d00c594d</code></a>] - <strong>deps</strong>: V8: backport 777fa98 (Michaël Zasso) <a href="30062.html">#30062</a></li>
<li>[<a href="1cfa98c23e.html"><code>1cfa98c23e</code></a>] - <strong>deps</strong>: V8: cherry-pick c721203 (Michaël Zasso) <a href="30065.html">#30065</a></li>
<li>[<a href="0d9ae1b8f6.html"><code>0d9ae1b8f6</code></a>] - <strong>deps</strong>: V8: cherry-pick ed40ab1 (Michaël Zasso) <a href="30064.html">#30064</a></li>
<li>[<a href="a63f7e73c4.html"><code>a63f7e73c4</code></a>] - <strong>(SEMVER-MINOR)</strong> <strong>dgram</strong>: add source-specific multicast support (Lucas Pardue) <a href="15735.html">#15735</a></li>
<li>[<a href="fc407bb555.html"><code>fc407bb555</code></a>] - <strong>doc</strong>: add missing hash for header link (Nick Schonning) <a href="30188.html">#30188</a></li>
<li>[<a href="201a60e6ba.html"><code>201a60e6ba</code></a>] - <strong>doc</strong>: linkify <code>.setupMaster()</code> in cluster doc (Trivikram Kamat) <a href="30204.html">#30204</a></li>
<li>[<a href="b7070f315f.html"><code>b7070f315f</code></a>] - <strong>doc</strong>: explain http2 aborted event callback (dev-313) <a href="30179.html">#30179</a></li>
<li>[<a href="f8fb2c06c5.html"><code>f8fb2c06c5</code></a>] - <strong>doc</strong>: linkify <code>.fork()</code> in cluster documentation (Anna Henningsen) <a href="30163.html">#30163</a></li>
<li>[<a href="ae81360214.html"><code>ae81360214</code></a>] - <strong>doc</strong>: update AUTHORS list (Michaël Zasso) <a href="30142.html">#30142</a></li>
<li>[<a href="1499a72a1f.html"><code>1499a72a1f</code></a>] - <strong>doc</strong>: improve doc Http2Session:Timeout (dev-313) <a href="30161.html">#30161</a></li>
<li>[<a href="3709b5cc7e.html"><code>3709b5cc7e</code></a>] - <strong>doc</strong>: move inactive Collaborators to emeriti (Rich Trott) <a href="30177.html">#30177</a></li>
<li>[<a href="a48d17900b.html"><code>a48d17900b</code></a>] - <strong>doc</strong>: add options description for send APIs (dev-313) <a href="29868.html">#29868</a></li>
<li>[<a href="dfb4a24695.html"><code>dfb4a24695</code></a>] - <strong>doc</strong>: fix an error in resolution algorithm steps (Alex Zherdev) <a href="29940.html">#29940</a></li>
<li>[<a href="403a648a16.html"><code>403a648a16</code></a>] - <strong>doc</strong>: fix numbering in require algorithm (Jan Krems) <a href="30117.html">#30117</a></li>
<li>[<a href="e4ab6fced1.html"><code>e4ab6fced1</code></a>] - <strong>doc</strong>: remove incorrect and outdated example (Tobias Nießen) <a href="30138.html">#30138</a></li>
<li>[<a href="3c23224a76.html"><code>3c23224a76</code></a>] - <strong>doc</strong>: adjust code sample for stream.finished (Cotton Hou) <a href="29983.html">#29983</a></li>
<li>[<a href="d91d270416.html"><code>d91d270416</code></a>] - <strong>doc</strong>: claim NODE_MODULE_VERSION=80 for Electron 9 (Samuel Attard) <a href="30052.html">#30052</a></li>
<li>[<a href="621eaf9ed5.html"><code>621eaf9ed5</code></a>] - <strong>doc</strong>: remove "it is important to" phrasing (Rich Trott) <a href="30108.html">#30108</a></li>
<li>[<a href="9a71091098.html"><code>9a71091098</code></a>] - <strong>doc</strong>: revise os.md (Rich Trott) <a href="30102.html">#30102</a></li>
<li>[<a href="381c6cd0d2.html"><code>381c6cd0d2</code></a>] - <strong>doc</strong>: delete "a number of" things in the docs (Rich Trott) <a href="30103.html">#30103</a></li>
<li>[<a href="45c70a9793.html"><code>45c70a9793</code></a>] - <strong>doc</strong>: remove dashes (Rich Trott) <a href="30101.html">#30101</a></li>
<li>[<a href="ea9d125536.html"><code>ea9d125536</code></a>] - <strong>doc</strong>: add legendecas to collaborators (legendecas) <a href="30115.html">#30115</a></li>
<li>[<a href="39070bbed0.html"><code>39070bbed0</code></a>] - <strong>doc</strong>: make YAML matter consistent in crypto.md (Rich Trott) <a href="30016.html">#30016</a></li>
<li>[<a href="978946e38b.html"><code>978946e38b</code></a>] - <strong>doc,meta</strong>: prefer aliases and stubs over Runtime Deprecations (Rich Trott) <a href="30153.html">#30153</a></li>
<li>[<a href="32a538901f.html"><code>32a538901f</code></a>] - <strong>doc,n-api</strong>: sort bottom-of-the-page references (Gabriel Schulhof) <a href="30124.html">#30124</a></li>
<li>[<a href="07b5584a3f.html"><code>07b5584a3f</code></a>] - <strong>(SEMVER-MINOR)</strong> <strong>fs</strong>: add <code>bufferSize</code> option to <code>fs.opendir()</code> (Anna Henningsen) <a href="30114.html">#30114</a></li>
<li>[<a href="2505f678ef.html"><code>2505f678ef</code></a>] - <strong>http</strong>: support readable hwm in IncomingMessage (Colin Ihrig) <a href="30135.html">#30135</a></li>
<li>[<a href="f01c5c51b0.html"><code>f01c5c51b0</code></a>] - <strong>inspector</strong>: turn platform tasks that outlive Agent into no-ops (Anna Henningsen) <a href="30031.html">#30031</a></li>
<li>[<a href="050efebf24.html"><code>050efebf24</code></a>] - <strong>meta</strong>: use contact_links instead of issue templates (Michaël Zasso) <a href="30172.html">#30172</a></li>
<li>[<a href="edfbee3727.html"><code>edfbee3727</code></a>] - <strong>module</strong>: resolve self-references (Jan Krems) <a href="29327.html">#29327</a></li>
<li>[<a href="93b1bb8cb5.html"><code>93b1bb8cb5</code></a>] - <strong>n-api,doc</strong>: add info about building n-api addons (Jim Schlight) <a href="30032.html">#30032</a></li>
<li>[<a href="cc1cd2b3c5.html"><code>cc1cd2b3c5</code></a>] - <strong>src</strong>: isolate-&gt;Dispose() order consistency (Shelley Vohr) <a href="30181.html">#30181</a></li>
<li>[<a href="a0df91cce1.html"><code>a0df91cce1</code></a>] - <strong>(SEMVER-MINOR)</strong> <strong>src</strong>: expose granular SetIsolateUpForNode (Shelley Vohr) <a href="30150.html">#30150</a></li>
<li>[<a href="ec7b69ff05.html"><code>ec7b69ff05</code></a>] - <strong>src</strong>: change env.h includes for forward declarations (Alexandre Ferrando) <a href="30133.html">#30133</a></li>
<li>[<a href="98c8f76dd1.html"><code>98c8f76dd1</code></a>] - <strong>src</strong>: split up InitializeContext (Shelley Vohr) <a href="30067.html">#30067</a></li>
<li>[<a href="d78e3176dd.html"><code>d78e3176dd</code></a>] - <strong>src</strong>: fix crash with SyntheticModule#setExport (Michaël Zasso) <a href="30062.html">#30062</a></li>
<li>[<a href="fd0aded233.html"><code>fd0aded233</code></a>] - <strong>src</strong>: allow inspector without v8 platform (Shelley Vohr) <a href="30049.html">#30049</a></li>
<li>[<a href="87f14e13b3.html"><code>87f14e13b3</code></a>] - <strong>stream</strong>: extract Readable.from in its own file (Matteo Collina) <a href="30140.html">#30140</a></li>
<li>[<a href="1d9f4278dd.html"><code>1d9f4278dd</code></a>] - <strong>test</strong>: use arrow functions for callbacks (Minuk Park) <a href="30069.html">#30069</a></li>
<li>[<a href="a03809d7dd.html"><code>a03809d7dd</code></a>] - <strong>test</strong>: verify npm compatibility with releases (Michaël Zasso) <a href="30082.html">#30082</a></li>
<li>[<a href="68e4b5a1fc.html"><code>68e4b5a1fc</code></a>] - <strong>tools</strong>: fix Python 3 deprecation warning in test.py (Loris Zinsou) <a href="30208.html">#30208</a></li>
<li>[<a href="348ec693ac.html"><code>348ec693ac</code></a>] - <strong>tools</strong>: fix Python 3 syntax error in mac_tool.py (Christian Clauss) <a href="30146.html">#30146</a></li>
<li>[<a href="e2fb353df3.html"><code>e2fb353df3</code></a>] - <strong>tools</strong>: use print() function in buildbot_run.py (Christian Clauss) <a href="30148.html">#30148</a></li>
<li>[<a href="bcbcce5983.html"><code>bcbcce5983</code></a>] - <strong>tools</strong>: undefined name opts -&gt; args in gyptest.py (Christian Clauss) <a href="30144.html">#30144</a></li>
<li>[<a href="14981f5bba.html"><code>14981f5bba</code></a>] - <strong>tools</strong>: git rm -r tools/v8_gypfiles/broken (Christian Clauss) <a href="30149.html">#30149</a></li>
<li>[<a href="d549a34597.html"><code>d549a34597</code></a>] - <strong>tools</strong>: update ESLint to 6.6.0 (Colin Ihrig) <a href="30123.html">#30123</a></li>
<li>[<a href="a3757546e8.html"><code>a3757546e8</code></a>] - <strong>tools</strong>: doc: improve async workflow of generate.js (Theotime Poisseau) <a href="30106.html">#30106</a></li>
</ul>
<p><a id="user-content-13.0.1"></a></p>
<h2><a id="user-content-2019-10-23-version-1301-current-targos" class="anchor" aria-hidden="true" href="#2019-10-23-version-1301-current-targos"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>2019-10-23, Version 13.0.1 (Current), @targos</h2>
<h3><a id="user-content-notable-changes-1" class="anchor" aria-hidden="true" href="#notable-changes-1"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Notable Changes</h3>
<ul>
<li><strong>deps</strong>:
<ul>
<li>Fixed a bug in npm 6.12.0 where warnings are emitted on Node.js 13.x (Jordan Harband) <a href="30079.html">#30079</a>.</li>
</ul>
</li>
<li><strong>esm</strong>:
<ul>
<li>Changed file extension resolution order of <code>--es-module-specifier-resolution=node</code>
to match that of the CommonJS loader (Myles Borins) <a href="29974.html">#29974</a>.</li>
</ul>
</li>
</ul>
<h3><a id="user-content-commits-1" class="anchor" aria-hidden="true" href="#commits-1"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Commits</h3>
<ul>
<li>[<a href="19a983c615.html"><code>19a983c615</code></a>] - <strong>build</strong>: make linter failures fail <code>test-doc</code> target (Richard Lau) <a href="30012.html">#30012</a></li>
<li>[<a href="13f3d6c680.html"><code>13f3d6c680</code></a>] - <strong>build</strong>: log the found compiler version if too old (Richard Lau) <a href="30028.html">#30028</a></li>
<li>[<a href="a25d2fcf8b.html"><code>a25d2fcf8b</code></a>] - <strong>build</strong>: make configure --without-snapshot a no-op (Michaël Zasso) <a href="30021.html">#30021</a></li>
<li>[<a href="e04d0584a5.html"><code>e04d0584a5</code></a>] - <strong>build</strong>: default Windows build to Visual Studio 2019 (Michaël Zasso) <a href="30022.html">#30022</a></li>
<li>[<a href="ccf58835c7.html"><code>ccf58835c7</code></a>] - <strong>build</strong>: use python3 to build and test on Travis (Christian Clauss) <a href="29451.html">#29451</a></li>
<li>[<a href="b92afcd90c.html"><code>b92afcd90c</code></a>] - <strong>build</strong>: fix version checks in configure.py (Michaël Zasso) <a href="29965.html">#29965</a></li>
<li>[<a href="2dc4da0d8b.html"><code>2dc4da0d8b</code></a>] - <strong>build</strong>: build benchmark addons like test addons (Richard Lau) <a href="29995.html">#29995</a></li>
<li>[<a href="2f36976594.html"><code>2f36976594</code></a>] - <strong>deps</strong>: npm: patch support for 13.x (Jordan Harband) <a href="30079.html">#30079</a></li>
<li>[<a href="9d332ab4ce.html"><code>9d332ab4ce</code></a>] - <strong>deps</strong>: upgrade to libuv 1.33.1 (Colin Ihrig) <a href="29996.html">#29996</a></li>
<li>[<a href="89b9115c4d.html"><code>89b9115c4d</code></a>] - <strong>doc</strong>: --enable-source-maps and prepareStackTrace are incompatible (Benjamin Coe) <a href="30046.html">#30046</a></li>
<li>[<a href="35bffcdd9d.html"><code>35bffcdd9d</code></a>] - <strong>doc</strong>: join parts of disrupt section in cli.md (vsemozhetbyt) <a href="30038.html">#30038</a></li>
<li>[<a href="0299767508.html"><code>0299767508</code></a>] - <strong>doc</strong>: update collaborator email address (Minwoo Jung) <a href="30007.html">#30007</a></li>
<li>[<a href="ff4f2999e6.html"><code>ff4f2999e6</code></a>] - <strong>doc</strong>: fix tls version typo (akitsu-sanae) <a href="29984.html">#29984</a></li>
<li>[<a href="62b4ca6e32.html"><code>62b4ca6e32</code></a>] - <strong>doc</strong>: clarify readable.unshift null/EOF (Robert Nagy) <a href="29950.html">#29950</a></li>
<li>[<a href="dc83ff9056.html"><code>dc83ff9056</code></a>] - <strong>doc</strong>: remove unused Markdown reference links (Nick Schonning) <a href="29961.html">#29961</a></li>
<li>[<a href="d80ece68ac.html"><code>d80ece68ac</code></a>] - <strong>doc</strong>: re-enable passing remark-lint rule (Nick Schonning) <a href="29961.html">#29961</a></li>
<li>[<a href="828e171107.html"><code>828e171107</code></a>] - <strong>doc</strong>: add server header into the discarded list of http message.headers (Huachao Mao) <a href="29962.html">#29962</a></li>
<li>[<a href="9729c5da8a.html"><code>9729c5da8a</code></a>] - <strong>esm</strong>: modify resolution order for specifier flag (Myles Borins) <a href="29974.html">#29974</a></li>
<li>[<a href="cfd45ebf94.html"><code>cfd45ebf94</code></a>] - <strong>module</strong>: refactor modules bootstrap (Bradley Farias) <a href="29937.html">#29937</a></li>
<li>[<a href="d561321e4a.html"><code>d561321e4a</code></a>] - <strong>src</strong>: remove unnecessary std::endl usage (Daniel Bevenius) <a href="30003.html">#30003</a></li>
<li>[<a href="ed80c233cd.html"><code>ed80c233cd</code></a>] - <strong>src</strong>: make implementing CancelPendingDelayedTasks for platform optional (Anna Henningsen) <a href="30034.html">#30034</a></li>
<li>[<a href="8fcc039de9.html"><code>8fcc039de9</code></a>] - <strong>src</strong>: expose ListNode&lt;T&gt;::prev_ on postmortem metadata (legendecas) <a href="30027.html">#30027</a></li>
<li>[<a href="0c88dc1932.html"><code>0c88dc1932</code></a>] - <strong>src</strong>: fewer uses of NODE_USE_V8_PLATFORM (Shelley Vohr) <a href="30029.html">#30029</a></li>
<li>[<a href="972144073b.html"><code>972144073b</code></a>] - <strong>src</strong>: remove unused iomanip include (Daniel Bevenius) <a href="30004.html">#30004</a></li>
<li>[<a href="b019ccd59d.html"><code>b019ccd59d</code></a>] - <strong>src</strong>: initialize openssl only once (Sam Roberts) <a href="29999.html">#29999</a></li>
<li>[<a href="3eae670470.html"><code>3eae670470</code></a>] - <strong>src</strong>: refine maps parsing for large pages (Gabriel Schulhof) <a href="29973.html">#29973</a></li>
<li>[<a href="f3712dfe83.html"><code>f3712dfe83</code></a>] - <strong>stream</strong>: simplify uint8ArrayToBuffer helper (Luigi Pinca) <a href="30041.html">#30041</a></li>
<li>[<a href="46aa4810ad.html"><code>46aa4810ad</code></a>] - <strong>stream</strong>: remove dead code (Luigi Pinca) <a href="30041.html">#30041</a></li>
<li>[<a href="f155dfeecb.html"><code>f155dfeecb</code></a>] - <strong>test</strong>: expand Worker test for non-shared ArrayBuffer (Anna Henningsen) <a href="30044.html">#30044</a></li>
<li>[<a href="e110d81b17.html"><code>e110d81b17</code></a>] - <strong>test</strong>: fix test runner for Python 3 on Windows (Michaël Zasso) <a href="30023.html">#30023</a></li>
<li>[<a href="c096f251e4.html"><code>c096f251e4</code></a>] - <strong>test</strong>: remove common.skipIfInspectorEnabled() (Rich Trott) <a href="29993.html">#29993</a></li>
<li>[<a href="b1b8663a23.html"><code>b1b8663a23</code></a>] - <strong>test</strong>: add cb error test for fs.close() (Matteo Rossi) <a href="29970.html">#29970</a></li>
</ul>
<p><a id="user-content-13.0.0"></a></p>
<h2><a id="user-content-2019-10-22-version-1300-current-bethgriggs" class="anchor" aria-hidden="true" href="#2019-10-22-version-1300-current-bethgriggs"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>2019-10-22, Version 13.0.0 (Current), @BethGriggs</h2>
<h3><a id="user-content-notable-changes-2" class="anchor" aria-hidden="true" href="#notable-changes-2"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Notable Changes</h3>
<ul>
<li><strong>assert</strong>:
<ul>
<li>If the validation function passed to <code>assert.throws()</code> or <code>assert.rejects()</code>
returns a value other than <code>true</code>, an assertion error will be thrown instead
of the original error to highlight the programming mistake (Ruben Bridgewater) <a href="28263.html">#28263</a>.</li>
<li>If a constructor function is passed to validate the instance of errors
thrown in <code>assert.throws()</code> or <code>assert.reject()</code>, an assertion error will be
thrown instead of the original error (Ruben Bridgewater) <a href="28263.html">#28263</a>.</li>
</ul>
</li>
<li><strong>build</strong>:
<ul>
<li>Node.js releases are now built with default full-icu support. This means
that all locales supported by ICU are now included and Intl-related APIs may
return different values than before (Richard Lau) <a href="29887.html">#29887</a>.</li>
<li>The minimum Xcode version supported for macOS was increased to 10. It is
still possible to build Node.js with Xcode 8 but this may no longer be the
case in a future v13.x release (Michael Dawson) <a href="29622.html">#29622</a>.</li>
</ul>
</li>
<li><strong>child_process</strong>:
<ul>
<li><code>ChildProcess._channel</code> (DEP0129) is now a Runtime deprecation (cjihrig) <a href="27949.html">#27949</a>.</li>
</ul>
</li>
<li><strong>console</strong>:
<ul>
<li>The output <code>console.timeEnd()</code> and <code>console.timeLog()</code> will now
automatically select a suitable time unit instead of always using
milliseconds (Xavier Stouder) <a href="29251.html">#29251</a>.</li>
</ul>
</li>
<li><strong>deps</strong>:
<ul>
<li>The V8 engine was updated to version 7.8. This includes performance
improvements to object destructuring, memory usage and WebAssembly startup
time (Myles Borins) <a href="29694.html">#29694</a>.</li>
</ul>
</li>
<li><strong>domain</strong>:
<ul>
<li>The domain's error handler is now executed with the active domain set to the
domain's parent to prevent inner recursion (Julien Gilli) <a href="26211.html">#26211</a>.</li>
</ul>
</li>
<li><strong>fs</strong>:
<ul>
<li>The undocumented method <code>FSWatcher.prototype.start()</code> was removed (Lucas Holmquist) <a href="29905.html">#29905</a>.</li>
<li>Calling the <code>open()</code> method on a <code>ReadStream</code> or <code>WriteStream</code> now emits a
runtime deprecation warning. The methods are supposed to be internal and
should not be called by user code (Robert Nagy) <a href="29061.html">#29061</a>.</li>
<li><code>fs.read/write</code>, <code>fs.readSync/writeSync</code> and <code>fd.read/write</code> now accept any
safe integer as their <code>offset</code> parameter. The value of <code>offset</code> is also no
longer coerced, so a valid type must be passed to the functions (Zach Bjornson) <a href="26572.html">#26572</a>.</li>
</ul>
</li>
<li><strong>http</strong>:
<ul>
<li>Aborted requests no longer emit the <code>end</code> or <code>error</code> events after <code>aborted</code>
(Robert Nagy) <a href="27984.html">#27984</a>, <a href="20077.html">#20077</a>.</li>
<li>Data will no longer be emitted after a socket error (Robert Nagy) <a href="28711.html">#28711</a>.</li>
<li>The legacy HTTP parser (previously available under the
<code>--http-parser=legacy</code> flag) was removed (Anna Henningsen) <a href="29589.html">#29589</a>.</li>
<li>The <code>host</code> option for HTTP requests is now validated to be a string value (Giorgos Ntemiris) <a href="29568.html">#29568</a>.</li>
<li>The <code>request.connection</code> and <code>response.connection</code> properties are now
runtime deprecated. The equivalent <code>request.socket</code> and <code>response.socket</code>
should be used instead (Robert Nagy) <a href="29015.html">#29015</a>.</li>
</ul>
</li>
<li><strong>http, http2</strong>:
<ul>
<li>The default server timeout was removed (Ali Ijaz Sheikh) <a href="27558.html">#27558</a>.</li>
<li>Brought 425 status code name into accordance with RFC 8470. The name changed
from "Unordered Collection" to "Too Early" (Sergei Osipov) <a href="29880.html">#29880</a>.</li>
</ul>
</li>
<li><strong>lib</strong>:
<ul>
<li>The <code>error.errno</code> property will now always be a number. To get the string
value, use <code>error.code</code> instead (Joyee Cheung) <a href="28140.html">#28140</a>.</li>
</ul>
</li>
<li><strong>module</strong>:
<ul>
<li><code>module.createRequireFromPath()</code> is deprecated. Use <code>module.createRequire()</code>
instead (cjihrig) <a href="27951.html">#27951</a>.</li>
</ul>
</li>
<li><strong>src</strong>:
<ul>
<li>Changing the value of <code>process.env.TZ</code> will now clear the tz cache. This
affects the default time zone used by methods such as
<code>Date.prototype.toString</code> (Ben Noordhuis) <a href="20026.html">#20026</a>.</li>
</ul>
</li>
<li><strong>stream</strong>:
<ul>
<li>The timing and behavior of streams was consolidated for a number of edge
cases. Please look at the individual commits below for more information.</li>
</ul>
</li>
</ul>
<h3><a id="user-content-semver-major-commits" class="anchor" aria-hidden="true" href="#semver-major-commits"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Semver-Major Commits</h3>
<ul>
<li>[<a href="5981fb7faa.html"><code>5981fb7faa</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>assert</strong>: fix line number calculation after V8 upgrade (Michaël Zasso) <a href="29694.html">#29694</a></li>
<li>[<a href="48d1ea5e7f.html"><code>48d1ea5e7f</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>assert</strong>: special handle identical error names in instance checks (Ruben Bridgewater) <a href="28263.html">#28263</a></li>
<li>[<a href="97c52ca5dc.html"><code>97c52ca5dc</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>assert</strong>: add more information to AssertionErrors (Ruben Bridgewater) <a href="28263.html">#28263</a></li>
<li>[<a href="5700cd17dd.html"><code>5700cd17dd</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>assert</strong>: do not repeat .throws() code (Ruben Bridgewater) <a href="28263.html">#28263</a></li>
<li>[<a href="d47b6786c9.html"><code>d47b6786c9</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>assert</strong>: wrap validation function errors (Ruben Bridgewater) <a href="28263.html">#28263</a></li>
<li>[<a href="0b3242c3ce.html"><code>0b3242c3ce</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>assert</strong>: fix generatedMessage property (Ruben Bridgewater) <a href="28263.html">#28263</a></li>
<li>[<a href="ace3f16917.html"><code>ace3f16917</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>assert</strong>: improve class instance errors (Ruben Bridgewater) <a href="28263.html">#28263</a></li>
<li>[<a href="0376b5b7ba.html"><code>0376b5b7ba</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>benchmark</strong>: use test/common/tmpdir consistently (João Reis) <a href="28858.html">#28858</a></li>
<li>[<a href="4885e50f7e.html"><code>4885e50f7e</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>build</strong>: make full-icu the default for releases (Richard Lau) <a href="29887.html">#29887</a></li>
<li>[<a href="60a3bd93ce.html"><code>60a3bd93ce</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>build</strong>: reset embedder string to "-node.0" (Myles Borins) <a href="29694.html">#29694</a></li>
<li>[<a href="9f830f37da.html"><code>9f830f37da</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>build</strong>: update minimum Xcode version for macOS (Michael Dawson) <a href="29622.html">#29622</a></li>
<li>[<a href="66eaeac1df.html"><code>66eaeac1df</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>build</strong>: reset embedder string to "-node.0" (Michaël Zasso) <a href="28016.html">#28016</a></li>
<li>[<a href="d05668d688.html"><code>d05668d688</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>child_process</strong>: runtime deprecate _channel (cjihrig) <a href="27949.html">#27949</a></li>
<li>[<a href="4f9cd2770a.html"><code>4f9cd2770a</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>child_process</strong>: simplify spawn argument parsing (cjihrig) <a href="27854.html">#27854</a></li>
<li>[<a href="66043e1812.html"><code>66043e1812</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>console</strong>: display timeEnd with suitable time unit (Xavier Stouder) <a href="29251.html">#29251</a></li>
<li>[<a href="80f2b67367.html"><code>80f2b67367</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>deps</strong>: patch V8 to 7.8.279.14 (Myles Borins) <a href="29694.html">#29694</a></li>
<li>[<a href="eeafb263f4.html"><code>eeafb263f4</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>deps</strong>: patch V8 to 7.8.279.12 (Myles Borins) <a href="29694.html">#29694</a></li>
<li>[<a href="ddfc3b0a76.html"><code>ddfc3b0a76</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>deps</strong>: patch V8 to 7.8.279.10 (Myles Borins) <a href="29694.html">#29694</a></li>
<li>[<a href="8d05991d10.html"><code>8d05991d10</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>deps</strong>: update V8's postmortem script (cjihrig) <a href="29694.html">#29694</a></li>
<li>[<a href="858602445b.html"><code>858602445b</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>deps</strong>: V8: cherry-pick 716875d (Myles Borins) <a href="29694.html">#29694</a></li>
<li>[<a href="f7f6c928c1.html"><code>f7f6c928c1</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>deps</strong>: update V8 to 7.8.279.9 (Myles Borins) <a href="29694.html">#29694</a></li>
<li>[<a href="84d3243ce9.html"><code>84d3243ce9</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>deps</strong>: V8: cherry-pick b33af60 (Michaël Zasso) <a href="28016.html">#28016</a></li>
<li>[<a href="2dcc3665ab.html"><code>2dcc3665ab</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>deps</strong>: update V8 to 7.6.303.28 (Michaël Zasso) <a href="28016.html">#28016</a></li>
<li>[<a href="eef1b5aa0f.html"><code>eef1b5aa0f</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>doc</strong>: make <code>AssertionError</code> a link (Ruben Bridgewater) <a href="28263.html">#28263</a></li>
<li>[<a href="8fd7184959.html"><code>8fd7184959</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>doc</strong>: update assert.throws() examples (Ruben Bridgewater) <a href="28263.html">#28263</a></li>
<li>[<a href="80d9b1c712.html"><code>80d9b1c712</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>doc</strong>: wrap long line (cjihrig) <a href="27951.html">#27951</a></li>
<li>[<a href="43a5170858.html"><code>43a5170858</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>domain</strong>: error handler runs outside of its domain (Julien Gilli) <a href="26211.html">#26211</a></li>
<li>[<a href="7eacb74389.html"><code>7eacb74389</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>fs</strong>: make FSWatcher.start private (Lucas Holmquist) <a href="29905.html">#29905</a></li>
<li>[<a href="773769df60.html"><code>773769df60</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>fs</strong>: add runtime deprecate for file stream open() (Robert Nagy) <a href="29061.html">#29061</a></li>
<li>[<a href="5e3b4d6ed9.html"><code>5e3b4d6ed9</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>fs</strong>: allow int64 offset in fs.write/writeSync/fd.write (Zach Bjornson) <a href="26572.html">#26572</a></li>
<li>[<a href="a3c0014e73.html"><code>a3c0014e73</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>fs</strong>: use IsSafeJsInt instead of IsNumber for ftruncate (Zach Bjornson) <a href="26572.html">#26572</a></li>
<li>[<a href="0bbda5e5ae.html"><code>0bbda5e5ae</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>fs</strong>: allow int64 offset in fs.read/readSync/fd.read (Zach Bjornson) <a href="26572.html">#26572</a></li>
<li>[<a href="eadc3850fe.html"><code>eadc3850fe</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>fs</strong>: close file descriptor of promisified truncate (João Reis) <a href="28858.html">#28858</a></li>
<li>[<a href="5f80df8820.html"><code>5f80df8820</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>http</strong>: do not emit end after aborted (Robert Nagy) <a href="27984.html">#27984</a></li>
<li>[<a href="e573c39b88.html"><code>e573c39b88</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>http</strong>: don't emit 'data' after 'error' (Robert Nagy) <a href="28711.html">#28711</a></li>
<li>[<a href="ac59dc42ed.html"><code>ac59dc42ed</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>http</strong>: remove legacy parser (Anna Henningsen) <a href="29589.html">#29589</a></li>
<li>[<a href="2daf883a18.html"><code>2daf883a18</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>http</strong>: throw if 'host' agent header is not a string value (Giorgos Ntemiris) <a href="29568.html">#29568</a></li>
<li>[<a href="0daec61b9b.html"><code>0daec61b9b</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>http</strong>: replace superfluous connection property with getter/setter (Robert Nagy) <a href="29015.html">#29015</a></li>
<li>[<a href="461bf36d70.html"><code>461bf36d70</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>http</strong>: fix test where aborted should not be emitted (Robert Nagy) <a href="20077.html">#20077</a></li>
<li>[<a href="d5577f0395.html"><code>d5577f0395</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>http</strong>: remove default 'timeout' listener on upgrade (Luigi Pinca) <a href="26030.html">#26030</a></li>
<li>[<a href="c30ef3cbd2.html"><code>c30ef3cbd2</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>http, http2</strong>: remove default server timeout (Ali Ijaz Sheikh) <a href="27558.html">#27558</a></li>
<li>[<a href="4e782c9deb.html"><code>4e782c9deb</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>http2</strong>: remove security revert flags (Anna Henningsen) <a href="29141.html">#29141</a></li>
<li>[<a href="41637a530e.html"><code>41637a530e</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>http2</strong>: remove callback-based padding (Anna Henningsen) <a href="29144.html">#29144</a></li>
<li>[<a href="91a4cb7175.html"><code>91a4cb7175</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>lib</strong>: rename validateInteger to validateSafeInteger (Zach Bjornson) <a href="26572.html">#26572</a></li>
<li>[<a href="1432065e9d.html"><code>1432065e9d</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>lib</strong>: correct error.errno to always be numeric (Joyee Cheung) <a href="28140.html">#28140</a></li>
<li>[<a href="702331be90.html"><code>702331be90</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>lib</strong>: no need to strip BOM or shebang for scripts (Refael Ackermann) <a href="27375.html">#27375</a></li>
<li>[<a href="e2c0c0c680.html"><code>e2c0c0c680</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>lib</strong>: rework logic of stripping BOM+Shebang from commonjs (Gus Caplan) <a href="27768.html">#27768</a></li>
<li>[<a href="14701e539c.html"><code>14701e539c</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>module</strong>: runtime deprecate createRequireFromPath() (cjihrig) <a href="27951.html">#27951</a></li>
<li>[<a href="04633eeeb9.html"><code>04633eeeb9</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>readline</strong>: error on falsy values for callback (Sam Roberts) <a href="28109.html">#28109</a></li>
<li>[<a href="3eea43af07.html"><code>3eea43af07</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>repl</strong>: close file descriptor of history file (João Reis) <a href="28858.html">#28858</a></li>
<li>[<a href="458a38c904.html"><code>458a38c904</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>src</strong>: bring 425 status code name into accordance with RFC 8470 (Sergei Osipov) <a href="29880.html">#29880</a></li>
<li>[<a href="7fcc1f7047.html"><code>7fcc1f7047</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>src</strong>: update NODE_MODULE_VERSION to 79 (Myles Borins) <a href="29694.html">#29694</a></li>
<li>[<a href="4b7be335b9.html"><code>4b7be335b9</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>src</strong>: update NODE_MODULE_VERSION to 78 (Michaël Zasso) <a href="28918.html">#28918</a></li>
<li>[<a href="a0e2c6d284.html"><code>a0e2c6d284</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>src</strong>: add error codes to errors thrown in C++ (Yaniv Friedensohn) <a href="27700.html">#27700</a></li>
<li>[<a href="94e980c9d3.html"><code>94e980c9d3</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>src</strong>: use non-deprecated overload of V8::SetFlagsFromString (Michaël Zasso) <a href="28016.html">#28016</a></li>
<li>[<a href="655e0dc01a.html"><code>655e0dc01a</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>src</strong>: update NODE_MODULE_VERSION to 77 (Michaël Zasso) <a href="28016.html">#28016</a></li>
<li>[<a href="e3cd79ef8e.html"><code>e3cd79ef8e</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>src</strong>: update NODE_MODULE_VERSION to 74 (Refael Ackermann) <a href="27375.html">#27375</a></li>
<li>[<a href="eba348b6ae.html"><code>eba348b6ae</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>src</strong>: make process.env.TZ setter clear tz cache (Ben Noordhuis) <a href="20026.html">#20026</a></li>
<li>[<a href="f2061930c8.html"><code>f2061930c8</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>src</strong>: enable V8's WASM trap handlers (Gus Caplan) <a href="27246.html">#27246</a></li>
<li>[<a href="f8f6a21580.html"><code>f8f6a21580</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>stream</strong>: throw unhandled error for readable with autoDestroy (Robert Nagy) <a href="29806.html">#29806</a></li>
<li>[<a href="f663b31cc2.html"><code>f663b31cc2</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>stream</strong>: always invoke callback before emitting error (Robert Nagy) <a href="29293.html">#29293</a></li>
<li>[<a href="aa32e13968.html"><code>aa32e13968</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>stream</strong>: do not flush destroyed writable (Robert Nagy) <a href="29028.html">#29028</a></li>
<li>[<a href="ba3be578d8.html"><code>ba3be578d8</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>stream</strong>: don't emit finish on error (Robert Nagy) <a href="28979.html">#28979</a></li>
<li>[<a href="db706da235.html"><code>db706da235</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>stream</strong>: disallow stream methods on finished stream (Robert Nagy) <a href="28687.html">#28687</a></li>
<li>[<a href="188896ea3e.html"><code>188896ea3e</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>stream</strong>: do not emit after 'error' (Robert Nagy) <a href="28708.html">#28708</a></li>
<li>[<a href="4a2bd69db9.html"><code>4a2bd69db9</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>stream</strong>: fix destroy() behavior (Robert Nagy) <a href="29058.html">#29058</a></li>
<li>[<a href="824dc576db.html"><code>824dc576db</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>stream</strong>: simplify <code>.pipe()</code> and <code>.unpipe()</code> in Readable (Weijia Wang) <a href="28583.html">#28583</a></li>
<li>[<a href="8ef68e66d0.html"><code>8ef68e66d0</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>test</strong>: clean tmpdir on process exit (João Reis) <a href="28858.html">#28858</a></li>
<li>[<a href="d3f20a4725.html"><code>d3f20a4725</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>test</strong>: use unique tmpdirs for each test (João Reis) <a href="28858.html">#28858</a></li>
<li>[<a href="174723354e.html"><code>174723354e</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>tools</strong>: patch V8 to run on older XCode versions (Ujjwal Sharma) <a href="29694.html">#29694</a></li>
<li>[<a href="1676502318.html"><code>1676502318</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>tools</strong>: update V8 gypfiles (Michaël Zasso) <a href="29694.html">#29694</a></li>
<li>[<a href="1a25e901b7.html"><code>1a25e901b7</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>tools</strong>: support full-icu by default (Steven R. Loomis) <a href="29522.html">#29522</a></li>
<li>[<a href="2664dacf7e.html"><code>2664dacf7e</code></a>] - <strong>(SEMVER-MAJOR)</strong> <strong>util</strong>: validate formatWithOptions inspectOptions (Ruben Bridgewater) <a href="29824.html">#29824</a></li>
</ul>
<h3><a id="user-content-semver-minor-commits" class="anchor" aria-hidden="true" href="#semver-minor-commits"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Semver-Minor Commits</h3>
<ul>
<li>[<a href="8915b15f8c.html"><code>8915b15f8c</code></a>] - <strong>(SEMVER-MINOR)</strong> <strong>http</strong>: add reusedSocket property on client request (themez) <a href="29715.html">#29715</a></li>
<li>[<a href="6afed1dc85.html"><code>6afed1dc85</code></a>] - <strong>(SEMVER-MINOR)</strong> <strong>n-api</strong>: add <code>napi\_detach\_arraybuffer</code> (legendecas) <a href="29768.html">#29768</a></li>
<li>[<a href="c0305af2c4.html"><code>c0305af2c4</code></a>] - <strong>(SEMVER-MINOR)</strong> <strong>repl</strong>: check for NODE_REPL_EXTERNAL_MODULE (Gus Caplan) <a href="29778.html">#29778</a></li>
</ul>
<h3><a id="user-content-semver-patch-commits" class="anchor" aria-hidden="true" href="#semver-patch-commits"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Semver-Patch Commits</h3>
<ul>
<li>[<a href="e6c389cb3c.html"><code>e6c389cb3c</code></a>] - <strong>benchmark</strong>: remove double word "then" in comments (Nick Schonning) <a href="29823.html">#29823</a></li>
<li>[<a href="1294c7e485.html"><code>1294c7e485</code></a>] - <strong>benchmark</strong>: add benchmark for vm.createContext (Joyee Cheung) <a href="29845.html">#29845</a></li>
<li>[<a href="6f814013f4.html"><code>6f814013f4</code></a>] - <strong>build</strong>: fix version checks in gyp files (Ben Noordhuis) <a href="29931.html">#29931</a></li>
<li>[<a href="6c205aba00.html"><code>6c205aba00</code></a>] - <strong>build</strong>: always use strings for compiler version in gyp files (Michaël Zasso) <a href="29897.html">#29897</a></li>
<li>[<a href="be926c7e21.html"><code>be926c7e21</code></a>] - <strong>build</strong>: find Python 3 or Python 2 in configure (cclauss) <a href="25878.html">#25878</a></li>
<li>[<a href="16f673ebcc.html"><code>16f673ebcc</code></a>] - <strong>build</strong>: re-enable openssl arm for arm64 (Edward Vielmetti) <a href="28180.html">#28180</a></li>
<li>[<a href="204248a0c3.html"><code>204248a0c3</code></a>] - <strong>console</strong>: update time formatting (Ruben Bridgewater) <a href="29629.html">#29629</a></li>
<li>[<a href="c64ed10d80.html"><code>c64ed10d80</code></a>] - <strong>crypto</strong>: reject public keys properly (Tobias Nießen) <a href="29913.html">#29913</a></li>
<li>[<a href="7de5a55710.html"><code>7de5a55710</code></a>] - <strong>deps</strong>: patch V8 to 7.8.279.17 (Michaël Zasso) <a href="29928.html">#29928</a></li>
<li>[<a href="a350d8b780.html"><code>a350d8b780</code></a>] - <strong>deps</strong>: V8: cherry-pick 53e62af (Michaël Zasso) <a href="29898.html">#29898</a></li>
<li>[<a href="6b962ddf01.html"><code>6b962ddf01</code></a>] - <strong>deps</strong>: patch V8 to 7.8.279.15 (Michaël Zasso) <a href="29899.html">#29899</a></li>
<li>[<a href="efa6bead1d.html"><code>efa6bead1d</code></a>] - <strong>doc</strong>: add missing deprecation code (cjihrig) <a href="29969.html">#29969</a></li>
<li>[<a href="c4de76f7a6.html"><code>c4de76f7a6</code></a>] - <strong>doc</strong>: update vm.md for link linting (Rich Trott) <a href="29982.html">#29982</a></li>
<li>[<a href="ed5eaa0495.html"><code>ed5eaa0495</code></a>] - <strong>doc</strong>: prepare miscellaneous docs for new markdown lint rules (Rich Trott) <a href="29963.html">#29963</a></li>
<li>[<a href="039eb56249.html"><code>039eb56249</code></a>] - <strong>doc</strong>: fix some recent nits in fs.md (Vse Mozhet Byt) <a href="29906.html">#29906</a></li>
<li>[<a href="7812a615ab.html"><code>7812a615ab</code></a>] - <strong>doc</strong>: fs dir modifications may not be reflected by dir.read (Anna Henningsen) <a href="29893.html">#29893</a></li>
<li>[<a href="37321a9e11.html"><code>37321a9e11</code></a>] - <strong>doc</strong>: add missing deprecation number (cjihrig) <a href="29183.html">#29183</a></li>
<li>[<a href="791409a9ce.html"><code>791409a9ce</code></a>] - <strong>doc</strong>: fixup changelog for v10.16.3 (Andrew Hughes) <a href="29159.html">#29159</a></li>
<li>[<a href="02b3722b30.html"><code>02b3722b30</code></a>] - <strong>doc,meta</strong>: reduce npm PR wait period to one week (Rich Trott) <a href="29922.html">#29922</a></li>
<li>[<a href="fce1a5198a.html"><code>fce1a5198a</code></a>] - <strong>domain</strong>: do not import util for a simple type check (Ruben Bridgewater) <a href="29825.html">#29825</a></li>
<li>[<a href="b798f64566.html"><code>b798f64566</code></a>] - <strong>esm</strong>: unflag --experimental-exports (Guy Bedford) <a href="29867.html">#29867</a></li>
<li>[<a href="5c93aab278.html"><code>5c93aab278</code></a>] - <strong>fs</strong>: buffer dir entries in opendir() (Anna Henningsen) <a href="29893.html">#29893</a></li>
<li>[<a href="624fa4147a.html"><code>624fa4147a</code></a>] - <strong>http2</strong>: fix file close error condition at respondWithFd (Anna Henningsen) <a href="29884.html">#29884</a></li>
<li>[<a href="d5c3837061.html"><code>d5c3837061</code></a>] - <strong>lib</strong>: remove the comment of base64 validation (Maledong) <a href="29201.html">#29201</a></li>
<li>[<a href="3238232fc4.html"><code>3238232fc4</code></a>] - <strong>lib</strong>: rename validateSafeInteger to validateInteger (cjihrig) <a href="29184.html">#29184</a></li>
<li>[<a href="aca1c283bd.html"><code>aca1c283bd</code></a>] - <strong>module</strong>: warn on require of .js inside type: module (Guy Bedford) <a href="29909.html">#29909</a></li>
<li>[<a href="1447a79dc4.html"><code>1447a79dc4</code></a>] - <strong>net</strong>: treat ENOTCONN at shutdown as success (Anna Henningsen) <a href="29912.html">#29912</a></li>
<li>[<a href="4ca61f40fe.html"><code>4ca61f40fe</code></a>] - <strong>process</strong>: add lineLength to source-map-cache (bcoe) <a href="29863.html">#29863</a></li>
<li>[<a href="545f7282d1.html"><code>545f7282d1</code></a>] - <strong>src</strong>: implement v8 host weakref hooks (Gus Caplan) <a href="29874.html">#29874</a></li>
<li>[<a href="53ca0b9ae1.html"><code>53ca0b9ae1</code></a>] - <strong>src</strong>: render N-API weak callbacks as cleanup hooks (Gabriel Schulhof) <a href="28428.html">#28428</a></li>
<li>[<a href="075c7ebeb5.html"><code>075c7ebeb5</code></a>] - <strong>src</strong>: fix largepages regression (Gabriel Schulhof) <a href="29914.html">#29914</a></li>
<li>[<a href="179f4232ed.html"><code>179f4232ed</code></a>] - <strong>src</strong>: remove unused using declarations in worker.cc (Daniel Bevenius) <a href="29883.html">#29883</a></li>
<li>[<a href="264cb79bc2.html"><code>264cb79bc2</code></a>] - <strong>src</strong>: silence compiler warning node_process_methods (Daniel Bevenius) <a href="28261.html">#28261</a></li>
<li>[<a href="89b32378c8.html"><code>89b32378c8</code></a>] - <strong>src</strong>: forbid reset_handler for SIGSEGV handling (Anna Henningsen) <a href="27775.html">#27775</a></li>
<li>[<a href="e256204776.html"><code>e256204776</code></a>] - <strong>src</strong>: reset SIGSEGV handler before crashing (Anna Henningsen) <a href="27775.html">#27775</a></li>
<li>[<a href="e6b3ec3d3c.html"><code>e6b3ec3d3c</code></a>] - <strong>src</strong>: do not use posix feature macro in node.h (Anna Henningsen) <a href="27775.html">#27775</a></li>
<li>[<a href="6e796581fc.html"><code>6e796581fc</code></a>] - <strong>src</strong>: remove freebsd SA_RESETHAND workaround (Ben Noordhuis) <a href="27780.html">#27780</a></li>
<li>[<a href="8709a408d2.html"><code>8709a408d2</code></a>] - <strong>stream</strong>: use more accurate end-of-stream writable and readable detection (Robert Nagy) <a href="29409.html">#29409</a></li>
<li>[<a href="698a29420f.html"><code>698a29420f</code></a>] - <strong>stream</strong>: fix readable state <code>awaitDrain</code> increase in recursion (ran) <a href="27572.html">#27572</a></li>
<li>[<a href="033037cec9.html"><code>033037cec9</code></a>] - <strong>stream</strong>: avoid unecessary nextTick (Robert Nagy) <a href="29194.html">#29194</a></li>
<li>[<a href="f4f856b238.html"><code>f4f856b238</code></a>] - <strong>test</strong>: fix flaky doctool and test (Rich Trott) <a href="29979.html">#29979</a></li>
<li>[<a href="7991b57cfd.html"><code>7991b57cfd</code></a>] - <strong>test</strong>: fix fs benchmark test (Rich Trott) <a href="29967.html">#29967</a></li>
<li>[<a href="2bb93e1108.html"><code>2bb93e1108</code></a>] - <strong>test</strong>: set LC_ALL to known good value (Ben Noordhuis) <a href="28096.html">#28096</a></li>
<li>[<a href="039cfdc838.html"><code>039cfdc838</code></a>] - <strong>test</strong>: add addon tests for <code>RegisterSignalHandler()</code> (Anna Henningsen) <a href="27775.html">#27775</a></li>
<li>[<a href="90b5f1b107.html"><code>90b5f1b107</code></a>] - <strong>tools</strong>: update remark-preset-lint-node to 1.10.1 (Rich Trott) <a href="29982.html">#29982</a></li>
<li>[<a href="ea3d5ff785.html"><code>ea3d5ff785</code></a>] - <strong>tools</strong>: fix test runner in presence of NODE_REPL_EXTERNAL_MODULE (Gus Caplan) <a href="29956.html">#29956</a></li>
<li>[<a href="8728f8660a.html"><code>8728f8660a</code></a>] - <strong>tools</strong>: fix GYP MSVS solution generator for Python 3 (Michaël Zasso) <a href="29897.html">#29897</a></li>
<li>[<a href="66b953207d.html"><code>66b953207d</code></a>] - <strong>tools</strong>: port Python 3 compat patches from node-gyp to gyp (Michaël Zasso) <a href="29897.html">#29897</a></li>
<li>[<a href="a0c6cf8eb1.html"><code>a0c6cf8eb1</code></a>] - <strong>tools</strong>: update remark-preset-lint-node to 1.10.0 (Rich Trott) <a href="29594.html">#29594</a></li>
<li>[<a href="1e01f3f022.html"><code>1e01f3f022</code></a>] - <strong>tools</strong>: apply more stringent blank-line linting for markdown files (Rich Trott) <a href="29447.html">#29447</a></li>
<li>[<a href="f9caee986c.html"><code>f9caee986c</code></a>] - <strong>vm</strong>: add Synthetic modules (Gus Caplan) <a href="29864.html">#29864</a></li>
</ul>
</article>
  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --><form class="js-jump-to-line-form Box-body d-flex" action accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;">
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>



  </div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-lg width-full p-responsive" role="contentinfo">
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mr-3 mr-lg-0">&copy; 2019 <span title="0.32036s from unicorn-5957b6889c-9k5pb">GitHub</span>, Inc.</li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to terms, text:terms" href="github-terms-of-service.html">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to privacy, text:privacy" href="github-privacy-statement.html">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="security_1.html">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="index_48.html" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="en.html">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="index_53.html">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to contact, text:contact" href="index_56.html">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="pricing.html" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="index_50.html" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="index_55.html" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="index_52.html" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="about_2.html">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    <script crossorigin="anonymous" type="application/javascript" src="js/compat-bootstrap-1d3fadce.js"></script>
    <script crossorigin="anonymous" type="application/javascript" src="js/frameworks-269d2693.js"></script>
    
    <script crossorigin="anonymous" async="async" type="application/javascript" src="js/github-bootstrap-54dade4c.js"></script>
    
    
    
  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden>
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href>Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href>Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>

