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
| Domain | Namecheap. The connector has **write access** (DNS records, nameservers) in new sessions, but always ask Michael before changing anything. It still points to **GitHub Pages** (this repo, branch `main`) until the shop is ready. |
| This repo | The old portfolio site (`main`, live until the domain moves), brand assets in `brand/`, and a design mock in `shop-preview/`. |

## Decisions already made
- Whole domain moves to Shopify ("option A"). The domain switch happens **only when Michael says go**: in Shopify, Settings → Domains → Connect existing domain, then Namecheap A `@` → `23.227.38.65` and CNAME `www` → `shops.myshopify.com` (confirm against what Shopify shows).
- Look: charcoal header with the round badge logo centred, a dark first screen with vertical "KAUSH" lettering, white shop grid, Roboto Condensed bold uppercase headings, square buttons. An opening "doors" animation plays on the home page once per visit.
- Languages: **English (default), Hebrew, Russian**. Every page, menu and text needs all three. Hebrew is right-to-left.
- Business: Osek Murshe. Prices are in ILS and include VAT. Ships to Israel and worldwide. Returns follow the Israeli legal minimum (14 days; fee up to 5% or ₪100, whichever is lower).
- Legal pages are Shopify **pages**, not Shopify's built-in Policies (no API access to those): Business details, Terms, Returns & cancellation, Shipping, Privacy, Accessibility statement, Cancel a purchase (contact form). All are linked in the footer.

## Privacy rules: never break these
- **Never put Michael's ID number, phone, or any address** in this repo, commit messages, the theme, the footer or any page, **except** the Shopify "Business details" page (ID, phone, email: the legal seller disclosure).
- **Never publish his home/studio address.** It's private. If a legal address is needed, the plan is a P.O. box (ת.ד.); add it only when Michael provides one.
- This repo is **public**. Never commit tokens, API keys, `.env` files, customer data, or order data.
- Strip location (EXIF/GPS) data from photos before committing them.

## How to work
- Theme edits: Shopify `theme_bash` on the Horizon theme, check with `theme_screenshot` (desktop and mobile), then `theme_commit`. **Publishing (`theme_publish`) only after Michael says yes.**
- Store data (pages, menus, collections, translations): Shopify GraphQL tools.
- Don't add stock imagery or other artists' work. Product imagery comes from Michael's designs.
- Michael's design files: print-ready PNGs, transparent background (tees about 4500×5400 px at 300 DPI; embroidery: bold, few colours).

## Done
- New design published on the Horizon theme (store still password-protected).
- Hebrew (/he) and Russian (/ru) are live, with every page, menu, collection and home/footer text translated. Language switcher in the header. Hebrew had to be attached to the store's web address with `webPresenceUpdate` (alternateLocales `["ru","he"]`). Theme text can only be translated after the theme is published, because translations use the live theme's content digests.

## Still to do
- When adding any new text or product: add Hebrew and Russian translations too.
- Cookie banner (Shopify admin → Settings → Customer privacy).
- P.O. box address for the Business details page.
- Products from Printify once Michael sends designs.
- Paid Shopify plan and the domain switch, when Michael says go.
- After the domain moves to Shopify, this repo can be made **private** (GitHub Pages on a free account needs a public repo; once it no longer serves the site, it doesn't).
