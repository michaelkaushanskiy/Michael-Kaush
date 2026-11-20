# Handoff: Michael Kaush shop

Read this first if you are a new Claude session picking up this project.

I'm Michael Kaush, a traditional tattoo artist and illustrator (Psycho Tattoos, Dizengoff Center, Tel Aviv; Instagram @mktattooer). I'm new to Claude Code and to building websites, so explain things in plain language, keep it short, and do as much as you can yourself. Ask before anything goes live or costs money.

**First step:** check that the Shopify connector works (get shop info), then give me a short status and the next step.

## Goal (decided)
Turn michaelkaush.com into a Shopify store selling merch printed with my designs: tees, socks, hats (prints maybe later). Products come from Printify (print-on-demand). Customers should only ever see my brand at michaelkaush.com, never "myshopify" or Printify. The whole domain moves to Shopify, and the tattoo gallery, About and booking become pages inside the shop.

## Where things stand
- **Live site:** michaelkaush.com is still the OLD portfolio, served by GitHub Pages from branch `main`. Nothing live has changed. Don't merge to `main` unless I ask. We are NOT publishing anything until the shop is ready.
- **Branch `claude/amazing-cerf-ynbdqh`** has:
  - `shop-preview/index.html`: **the design direction for the shop home page**, built phone-first.
    - Opening effect: the page appears as a thin centre strip and opens out to full width in about 0.6s, once per visit.
    - Header: charcoal (#262626), with a centred round badge logo (a placeholder: sacred heart inside "MICHAEL KAUSH ✦ TEL AVIV ✦ TATTOO"). On phones the menu button is on the left and search/cart on the right.
    - Hero: dark, with a large faint vertical "KAUSH" in Pirata One, then "Tattoo artist original goods" and a Shop now button.
    - Then a white 2-up (phone) / 4-up (desktop) category grid (Tees, Socks, Hats, Prints) in Roboto Condensed bold uppercase, a swipeable artwork strip, a dark "Book a tattoo" band (button to https://ig.me/m/mktattooer) and a charcoal footer with an email sign-up.
  - An earlier dark portfolio redesign (`index.html`, `styles.css`, `script.js`, etc.). Not approved; superseded by the shop.
- **Design reference:** https://threetidestattoo-online.myshopify.com/en/collections/new-arrival uses Shopify's free **Dawn** theme. Its opening animation is from threetidestattoo.com. Use the layout and feel, but my own brand, logo, art and words; don't copy theirs.
- **Images** in `images/`: tattoo1.jpg (butterfly lady tattoo), pencil1.jpg (sacred heart flash sheet), pencil2.jpg (cowgirl), digital1.jpg (True Love digital flash), ink1.jpg (swallowtail & rose), michael.jpg (me tattooing).
- **Domain/DNS** is at Namecheap; the Namecheap connector is read-only, so I make DNS changes myself with guidance.
  - Now: A @ → GitHub (185.199.108–111.153), CNAME www → Michaelkaush.github.io.
  - **Only when the shop is ready AND I say go:** in Shopify, Settings → Domains → Connect existing domain → michaelkaush.com. Then in Namecheap set A @ → 23.227.38.65 (replacing the 4 GitHub records) and CNAME www → shops.myshopify.com. Confirm these against what Shopify shows.
- **Shopify connector:** earlier sessions kept getting "needs you to sign in again". If it still fails, say so plainly and offer:
  - (a) Disconnect → Connect → pick store → Install in claude.ai Settings → Connectors, then a new session.
  - (b) A preview store via create_store (country IL) that I save to my account later. I may not have a Shopify store yet, so ask.
- **Printify:** there's no Claude connector.
  1. I link Printify to Shopify: Printify dashboard → My stores → Add new store → Shopify → install the Printify app.
  2. Products are made either by me in Printify's editor, or by Claude through the Printify API with a personal access token. If I choose the API, ask for the token with the secure credential form for host api.printify.com, never in chat. Show draft products before publishing.

## Next steps
1. Get Shopify working (or the preview store).
2. Load the Shopify skills, duplicate the Dawn theme, and build the `shop-preview/index.html` design into it: opening animation, header, hero, colours, fonts. Remove "Powered by Shopify". Show phone screenshots before publishing.
3. Create collections (Tees, Socks, Hats, Prints) and pages:
   - Gallery: upload the images.
   - About: michael.jpg and my bio.
   - Booking, in 4 steps: pick flash on Instagram or bring an idea → send idea, placement, size and dates → design together → confirm, with a deposit if needed. Add a button to DM @mktattooer.
   - Set up the menu.
4. Printify: guide me through linking, then products.
5. Domain switch only when I say go.
