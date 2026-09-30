# Alvin Ka Yue Li's website

A bilingual Jekyll website published with GitHub Pages. English content lives at
the repository root; Japanese content lives in `ja/`.

## Local preview

The `.ruby-version` file pins Ruby to 3.2.0 for Netlify builds, keeping it
compatible with Bundler 2.2.19 in the existing lockfile.

```sh
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`. To build without starting a server, run
`bundle exec jekyll build`. Generated files live in `_site/`.

## Blog editor

The public blog lives at `/blog/` and `/ja/blog/`. Use the Decap CMS editor at
`https://alvinlikayue.netlify.app/admin/`. GitHub Pages' `/admin/` redirects there
so the editor runs on the same domain as the Netlify OAuth project, allowing the
authorization popup to hand its result back to the editor. Local previews still
load the editor without redirecting. Its configuration is in `admin/config.yml`
and targets the `main` branch of `alvinlikayue/alvinlikayue.github.io`.

The editor is configured to use Netlify project
`alvinlikayue.netlify.app` for GitHub OAuth. Its GitHub authentication
provider must be installed in the Netlify dashboard before sign-in works;
repository access for deployment alone does not enable that provider. The
primary site remains hosted on GitHub Pages.

### Option A: Netlify's GitHub OAuth service

1. Connect this repository to the Netlify project with the
   `alvinlikayue.netlify.app` hostname. Use `bundle exec jekyll build` as the build
   command and `_site` as the publish directory so `/admin/` is deployed there.
2. In [GitHub OAuth Apps](https://github.com/settings/developers), register an app.
   Use `https://alvinlikayue.github.io` as its homepage and
   `https://api.netlify.com/auth/done` as the authorization callback URL.
3. In the Netlify project's **Project configuration → Security → OAuth**, select
   **Install Provider**, choose GitHub, and enter the app's Client ID and Client
   Secret. Store the secret there, never in this repository.
4. `backend.site_domain` in `admin/config.yml` is already set to
   `alvinlikayue.netlify.app`. If the Netlify project changes, update it
   to the new hostname, without `https://`.
5. Wait for the Netlify deployment to finish, then visit
   `https://alvinlikayue.netlify.app/admin/` and click **Login with GitHub**.
   Leave the editor open until the popup finishes. If Netlify requests access to
   the protected site first, sign in with the Netlify account that owns it.

See [Netlify's OAuth instructions](https://docs.netlify.com/manage/security/secure-access-to-sites/oauth-provider-tokens/)
and [Decap's GitHub backend documentation](https://decapcms.org/docs/github-backend/).
Editors must have push access to this repository.

### Option B: An existing external OAuth service

If you already run a Decap-compatible GitHub OAuth service, configure
`backend.base_url` and `backend.auth_endpoint` in `admin/config.yml` instead of
`site_domain`. Configure its GitHub OAuth callback and permitted origin for
`https://alvinlikayue.github.io` according to that service's instructions.
Remove the GitHub Pages redirect in `admin/index.html` if switching to an external
service and hosting the editor on GitHub Pages again.

See [Decap's external OAuth clients](https://decapcms.org/docs/external-oauth-clients/).

### Writing and publishing

1. Open `/admin/`, sign in, and select **English posts** or **Japanese posts**.
2. Create an entry with a title, date, and body. The editor supports Markdown,
   optional summaries, tags, and image uploads.
3. Save a draft. The editorial workflow keeps drafts on separate GitHub branches
   and pull requests, outside the public site's publishing branch.
4. When ready, change its status to **Ready** and publish. Decap merges the entry
   into `main`; GitHub Pages then rebuilds the site.

English posts are stored in `_posts/`; Japanese posts are stored in `ja/_posts/`.
Files follow `YYYY-MM-DD-slug.md`. Published URLs use
`/blog/YYYY/MM/DD/slug/` and `/ja/blog/YYYY/MM/DD/slug/` respectively.
Uploads are stored in `assets/images/blog/`.

Translations are optional. If a post has a translation, enter its published
path in the translation URL field of both entries to enable the language switch.
Posts without a translation have no language switch. For Japanese titles, check
the filename slug in the editor before saving; use a short Latin-character slug
if the generated one is unsuitable.

The date controls the post's timestamp and initial filename. Jekyll omits
future-dated entries until a build runs after that date; GitHub Pages does not
schedule a rebuild just because time passes. Use a current or past date when
publishing immediately. Changing the filename of a published post changes its URL.

The editor's preview shows the content; check the published site to see the full
site layout. No example entries have been published.

## Site structure

- `_config.yml`: site settings, navigation, and blog defaults.
- `_layouts/default.html`: shared page layout and SEO metadata.
- `_layouts/post.html`: blog article layout.
- `assets/css/style.css`: shared responsive styles.
- `assets/js/`: slideshows and the mentoring map.
- `reference/`: local reference files excluded from Git and builds.

This README is excluded from the published website.
