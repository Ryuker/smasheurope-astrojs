# AstroJS SmashEurope.com rebuild - notes
- Full SSR version of SmashEurope.com

**uses:**
- Node v20.16.0 (use NVM use 20)

## To Use:
- Tailwind
- Vue



## Usefull:
- open source icons - [iconify](https://iconify.design/)
- implementation of icons in astro - [astro icon](https://www.astroicon.dev/guides/customization/)
- tooltip library - [floating ui](https://floating-ui.com/docs/getting-started#vanilla)

**Event JSON**
``` JSON
{
  "banner": "regen-2025_banner.png",
  "title": "Regen 2025",
  "games": "Ultimate | Melee | Brawl",
  "description": "The Summertime blockbuster returns and aims to be the biggest Smash Bros. Ultimate event in UK history with a 3 day major hosted in the prestigious Athena Venue in Leicester feat. all Bo5 singles, a capacity of 1024, a line up of global top players in attendance and many social events.",
  "dates": [
    "2025-08-23T00:00:00.000Z",
    "2025-08-25T00:00:00.000Z"
  ],
  "location": "Leicester, England",
  "details": "https://www.start.gg/tournament/regen-2024/details",
  "slug": "regen-2025"
}
```

modal notes:
[explanation](https://stackoverflow.com/questions/25864259/how-to-close-the-new-html-dialog-tag-by-clicking-on-its-backdrop)
[explanation of light-closing dialog](https://web.dev/articles/building/a-dialog-component#adding-light-dismiss)
``` HTML
<button onclick="this.nextElementSibling.showModal()">Test</button>

<dialog style="padding: 0" onmousedown="event.target==this && this.close()">
  <form style="padding: 1rem" method="dialog">
    <p>Click outside to close the dialog.</p>
    <button>Click here</button>
  </form>
</dialog>

<dialog style="padding: 0"
  onmousedown="event.target==this && this.close(-1)"
  onclose="this.returnValue==-1 && alert('closed by clicking outside')"
>
```

format string to proper json - [link](https://jsonformatter.org/json-stringify-online) 

modal animation - [link](https://frontendmasters.com/blog/animating-dialog/)


## SSG MODE Steps:
- set STATIC_MODE to true in .env file in the root
  - this is used to modify the urls to go to the right endpoint

- change `output` to static in `astro.config.mjs`

- api endpoints need .json in the file name to indicate the proper type
  - in SSR mode this need to be removed


## Supporting relative links
- done through a package - [astro-relative-links](https://www.npmjs.com/package/astro-relative-links)


