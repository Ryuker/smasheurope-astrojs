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


# Country flags
- flag-icons package with SVG flags - [flag-icons](https://github.com/lipis/flag-icons)

# JSON Server - Multiple files API support
- video explaining how to support CRUD for multiple files - [video](https://www.youtube.com/watch?v=d9p9n7iJ1HE&t=1736s)
 "json-server": "^0.17.4"




## Self Hosting Research
we can configure coolify.io in a local setup for exploring the setup
- this will allow for hosting a proper database in a setup that's eventually deployable to production
- this will allow for hosting a CMS
- this gives us a setup that can run Node, PHP etc
   - so we can host Wordpress as well
- this allows for news.smasheurope.com domains for example when we go to production.
  - we can setup dev.news.smaseurope.com as well for a better deployment flow.
- we can still hook up 

### Hosting Live
- we can use hertzer to selfhost coolify.io or Kubero
- this would allow us to have news.smasheurope.com and dev alternatives etc
- we basically run  our own Vercel like interface for managing the different projects this way without having the costs of hosting on Vercel.

Coolify.io does not support kubernetes yet, so it's limited in scaling

#### Local Testing the setup:
[running KIND locally](https://www.youtube.com/watch?v=eKr75oClPZ4)
- used to install Kubernetes in a docker container a local machine
- then can install Kubero in that Kubernetes
  - this allows for setting up a scalable setup
  - the scaling isn't necessary but this way we can just repeat the setup when we start to setup a VPN on an actual cloud server like hertzner.

[hosting kubero](https://www.youtube.com/watch?v=3hvdqQoxU70)
- built on kubernetes, better for scaling
- Kubero offers an interface to deploy apps, hook up to gihub repo's etc
  - we can install PHP, Node etc
  - this gives a lot of flexibility to build dedicated apps and connect them to each other.
    - we can avoid a Monolith application this way.
[docs](https://www.kubero.dev/docs/goals-and-concepts)
