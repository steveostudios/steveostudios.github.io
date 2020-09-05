---
title: Permalinking Muliple Storefronts in WooCommerce
date: 2015-05-05
tags: ["wordress"]
---

I ran into an issue when I was modifying permalinks in Wordpress today. Specifically, I was trying to achieve the effect of creating multiple storefronts on a Wordpress Woocommerce site using product categories. In order to do that, ideally the urls would look differently than out of the box Wordpress and Woocommerce.

## The idea

Here is how I'd like this to look.

- `http://example.com/store` would be the overarching storefront.
- `http://example.com/store/store-name` would be an individual store (replacing _store-name_ with the product category name)
- `http://example.com/store/store-name/products/product-name` would be an individual product belonging to that store (replacing _product-name_ with the actual product name)

Unfortunatly, I coudn't find a way to do this. Things got weird. Everytime I would go to `http://example.com/store/store-name` it would go to the straight to the first product in that category, bypassing the category page altogether.

I did, however, come up with a second-best workflow that I'm okay with.

## The solution

- `http://example.com/stores` would be the overarching storefront. Here one can see all of the "stores".
- `http://example.com/store/store-name` would be an individual store (replacing _store-name_ with the product category name)
- `http://example.com/products/store-name/products/product-name` would be an individual product belonging to that store (replacing _product-name_ with the actual product name)

I did this by changing the following:

- Pages > Store page
  - Permalink to `http://example.com/stores`
- WooCommerce > Settings > Products > Display
  - Shop Page Display: Show categories & subcategories
- Settings > Permalinks
  - Product category base: `"store"`
  - Custom base: `"/products/%product_cat%"`

That seemed to do the trick!
