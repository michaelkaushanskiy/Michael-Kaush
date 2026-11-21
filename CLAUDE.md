# CLAUDE.md: Michael Kaush

Read this first. Michael is new to code: explain in plain language, keep it short, do the work yourself, and **ask before anything goes live or costs money**.

## What this project is
- **michaelkaush.com** is becoming a **Shopify store** selling merch (tees, socks, hats, prints) printed with Michael's own designs via **Printify** (print-on-demand, ships unbranded).
- Michael is a traditional tattoo artist (Instagram @mktattooer). The shop is about merch; the only tattoo page is "Book a tattoo".

## Where things live
| Thing | Where |
|---|---|
| The real website (theme, pages, menus, collections, products) | **Shopify**, via the Shopify connector. Theme: **Horizon** (the live/MAIN theme). Design rules are in the theme's `DESIGN.md`. |
| Products / fulfilment | **Printify**, linked to the Shopify store. No Claude connector: Michael or the Chrome Claude uses Printify's site, or use the Printify API with a token entered through the secure credential form (never in chat, never in files). |
| Domain | Namecheap. The connector has **write access** (DNS records, nameservers) in new sessions, but always ask Michael before changing anything. **Switched to Shopify on 2026-11-20**: A `@` → 23.227.38.65, CNAME `www` → shops.myshopify.com, TXT kept. Rollback values (GitHub Pages): A `@` → 185.199.108.153/.109/.110/.111 and CNAME `www` → Michaelkaush.github.io. **When changing DNS, always add new records BEFORE deleting old ones.** |
| This repo | The old portfolio site (`main`, live until the domain moves), brand assets in `brand/`, and a design mock in `shop-preview/`. |

## Decisions already made
- Whole domain moves to Shopify ("option A"). The domain switch happens **only when Michael says go**: in Shopify, Settings → Domains → Connect existing domain, then Namecheap A `@` → `23.227.38.65` and CNAME `www` → `shops.myshopify.com` (confirm against what Shopify shows).
- Look: charcoal header with the round badge logo centred, a dark first screen with vertical "KAUSH" lettering, white shop grid, Roboto Condensed bold uppercase headings, square buttons. An opening "doors" animation plays on the home page once per visit.
- Languages: **English (default), Hebrew, Russian**. Every page, menu and text needs all three. Hebrew is right-to-left.
- Business: Osek Murshe. Prices are in ILS and include VAT. Ships to Israel and worldwide. Returns follow the Israeli legal minimum (14 days; fee up to 5% or ₪100, whichever is lower).
- Legal pages are Shopify **pages**, not Shopify's built-in Policies (no API access to those): Business details, Terms, Returns & cancellation, Shipping, Privacy, Accessibility statement, Cancel a purchase (contact form). All are linked in the footer.

## Products (decided 2026-11-21: Michael's final picks, best quality)
- **T-shirt:** Comfort Colors 1717 (Printify blueprint 706), print provider **Monster Digital**, **front + back**: small flash/logo on the front chest (~9–10 cm), big drawing on the back (~28–30 cm wide). Black and white. Cost ≈ $19.73 + $10.39 shipping to Israel. **Price ₪139 incl. VAT** → ≈ ₪42 profit after VAT.
- **Dad hat:** Yupoong 6245CM Classic Dad Cap (blueprint 1447), provider **Printful**, embroidered flash in the shape of the design on the front. Cost ≈ $21.36 + $10.39. **Price ₪135 incl. VAT** → ≈ ₪33.
- **Socks:** Cushioned Crew Socks (blueprint 574), provider **ThreadStudio**, all-over print, black heel/toe. Cost ≈ $11.40 + $8.79. **Price ₪89 incl. VAT** (decided) → ≈ ₪38 when ordered alone, ≈ ₪16 when added to another order.
- Shipping charged to customers: flat **₪49 incl. VAT per order**. Each extra item in an order costs us only ≈ $4 to ship.
- Assumptions: ₪3.70/$, ~3% payment fees, VAT 18% included in prices. Recalculate with the real rate before publishing.
- Printify API token is saved as a network secret on the "Michael-Kaush" environment (host api.printify.com); Printify shop id 29645230 ("My new store", linked to Shopify). Never print or store the token.
- Israeli prices feel high because of US→Israel shipping (~₪38–43 per order). Idea for later: print best-sellers locally in Israel, keep Printify for abroad.

## Privacy rules: never break these
- **Never put Michael's ID number, phone, or any address** in this repo, commit messages, the theme, the footer or any page, **except** the Shopify "Business details" page (ID, phone, email: the legal seller disclosure).
- **Never publish his home address.** It's private.
- His **studio** is a private studio at **Shvil HaMeretz 6, Tel Aviv**. Michael approved showing this address publicly (2026-11-20), e.g. in the "Book a tattoo" texts. He no longer works at Psycho Tattoos. Whether to use the studio address for the legal Business details page is still to be decided with Michael.
- This repo is **public**. Never commit tokens, API keys, `.env` files, customer data, or order data.
- Strip location (EXIF/GPS) data from photos before committing them.

## How to work
- Theme edits: Shopify `theme_bash` on the Horizon theme, check with `theme_screenshot` (desktop and mobile), then `theme_commit`. **Publishing (`theme_publish`) only after Michael says yes.**
- Store data (pages, menus, collections, translations): Shopify GraphQL tools.
- Don't add stock imagery or other artists' work. Product imagery comes from Michael's designs.
- Michael's design files: print-ready PNGs, transparent background (tees about 4500×5400 px at 300 DPI; embroidery: bold, few colours).

## Done
- Domain michaelkaush.com points to Shopify. Paid plan active, password removed: the store is **public** (2026-11-20). The home page shows "First drop coming soon" (placeholder product grid hidden) until products exist. A branded password page also exists in EN/HE/RU if private mode is ever turned back on.
- New design published on the Horizon theme (store still password-protected).
- Hebrew (/he) and Russian (/ru) are live, with every page, menu, collection and home/footer text translated. Language switcher in the header. Hebrew had to be attached to the store's web address with `webPresenceUpdate` (alternateLocales `["ru","he"]`). Theme text can only be translated after the theme is published, because translations use the live theme's content digests.

## Still to do
- **Before selling:** products (Michael's designs → Printify), a payment provider (check Settings → Payments; Shopify Payments may not be available for Israel, so PayPal or a local provider app), a payment card in Printify, shipping rates.
- When products exist: re-enable the home page "New arrivals" product list (`product_list_fa6P9H`, currently `disabled: true`) and remove the "First drop coming soon" section.
- Hebrew RTL: mirror the arrow icon in the email sign-up fields (cosmetic).
- Make michaelkaush.com the **primary domain** in Shopify (Settings → Domains) once it shows Connected with the TLS certificate ready (no API for this: Michael or the Chrome Claude).
- After that, GitHub Pages no longer serves the site: make this repo private and turn off Pages.
- When adding any new text or product: add Hebrew and Russian translations too.
- Cookie banner (Shopify admin → Settings → Customer privacy).
- P.O. box address for the Business details page.
- Products from Printify once Michael sends designs.
- Paid Shopify plan and the domain switch, when Michael says go.
- After the domain moves to Shopify, this repo can be made **private** (GitHub Pages on a free account needs a public repo; once it no longer serves the site, it doesn't).
