# Music Festival Discovery

A scalable, data-driven platform for music festival band discovery with whimsical, earthy design.

## Features

- 🎵 YouTube playlist integration for each festival
- 📍 Google Maps links for all venues
- 🔍 Real-time band search
- 🎸 View by venue or genre
- 🎨 Handwritten, lofi indie rock aesthetic
- 📱 Responsive design

## Structure

```
music_discovery/
├── index.html              # Root page - redirects to default festival
├── config.json             # Root config: default festival & list of all festivals
├── 2026/
│   └── NH/
│       └── keene_music_festival_2026/
│           ├── index.html        # Festival template (shared across all festivals)
│           ├── config.json       # Per-festival config (playlist IDs, social links)
│           ├── data.json         # Festival-specific data (bands, venues, genres)
│           └── keene_music_festival.jpg  # Festival poster
└── 2027/                   # Future years
    └── NH/
        └── keene_music_festival_2027/
            ├── index.html
            ├── config.json
            ├── data.json
            └── poster.jpg
```

**Note**: When you navigate to a directory like `/2026/NH/keene_music_festival_2026/`, the web server automatically loads `index.html`. You don't need to type `index.html` in the URL.

## Adding a New Festival

### 1. Create Festival Folder

Create a new folder following the structure: `YEAR/STATE/festival_name_YEAR/`

```bash
mkdir -p 2027/NH/keene_music_festival_2027
```

### 2. Copy Template Files

Copy the template and configs from an existing festival:

```bash
cp 2026/NH/keene_music_festival_2026/index.html 2027/NH/keene_music_festival_2027/
cp 2026/NH/keene_music_festival_2026/config.json 2027/NH/keene_music_festival_2027/
# Add your poster image
```

### 3. Create data.json

Create a `data.json` file in your festival folder with this structure:

```json
{
  "festival": {
    "name": "Keene Music Festival 2027",
    "date": "2027-09-04",
    "dateDisplay": "Saturday, September 4, 2027",
    "location": "Downtown Keene, NH",
    "posterImage": "keene_music_festival.jpg"
  },
  "venues": [
    {
      "id": "city-tire",
      "name": "City Tire",
      "color": "#e67e22",
      "mapsQuery": "City+Tire+Keene+NH",
      "pattern": "dots",
      "bands": [
        {
          "name": "Band Name",
          "startTime": "12:00",
          "endTime": "13:00",
          "youtubeLink": "https://www.youtube.com/results?search_query=Band+Name+band",
          "genre": "Rock"
        }
      ]
    }
  ],
  "genres": {
    "Rock": ["Band Name 1", "Band Name 2"],
    "Folk": ["Band Name 3"],
    ...
  },
  "links": {
    "exploreKeene": "https://explorekeene.org/",
    "monadnockRegion": "https://www.monadnocknh.com/"
  }
}
```

#### Venue Pattern Options

Each venue can have one of these pattern styles:
- `"dots"` - Scattered dot pattern
- `"vertical-lines"` - Notebook paper style
- `"crosshatch"` - Graph paper grid
- `"dot-matrix"` - Regular dot grid
- `"grid"` - Railroad track pattern
- `"diagonal-crosshatch"` - Diagonal lines
- `"multi-angle"` - Chaotic multi-directional lines

#### Genre Options

Standard genres (customize as needed):
- Rock
- Folk
- Indie
- Electronic
- Jazz
- Acoustic
- Alternative
- Experimental

### 4. Create Per-Festival config.json

Create a `config.json` in your festival folder:

```json
{
  "playlistVideoIds": [],
  "socialLinks": {
    "facebook": "",
    "instagram": "",
    "twitter": ""
  }
}
```

**Fields:**
- `playlistVideoIds`: Array of YouTube video IDs for the header playlist link
- `socialLinks`: Optional social media links for the festival

### 5. Update Root config.json

Add your festival to the root `config.json`:

```json
{
  "defaultFestival": "2027/NH/keene_music_festival_2027",
  "festivals": [
    {
      "id": "keene_music_festival_2026",
      "name": "Keene Music Festival 2026",
      "path": "2026/NH/keene_music_festival_2026",
      "year": 2026,
      "state": "NH"
    },
    {
      "id": "keene_music_festival_2027",
      "name": "Keene Music Festival 2027",
      "path": "2027/NH/keene_music_festival_2027",
      "year": 2027,
      "state": "NH"
    }
  ]
}
```

**Fields:**
- `defaultFestival`: Path to the festival that loads on the homepage (no leading or trailing slashes)
- `id`: Unique identifier for the festival
- `name`: Display name
- `path`: Relative URL path (no leading or trailing slashes)
- `year`: Festival year
- `state`: Two-letter state code

### 6. (Optional) Add YouTube Playlist

#### Option A: Manual Video IDs

Find representative videos for your festival and add their IDs to the **per-festival** `config.json`:

1. Find a YouTube video: `https://www.youtube.com/watch?v=ABC123XYZ`
2. Extract the ID: `ABC123XYZ` (the part after `v=`)
3. Edit `2027/NH/keene_music_festival_2027/config.json`:

```json
{
  "playlistVideoIds": ["ABC123XYZ", "DEF456UVW", "GHI789RST"],
  "socialLinks": {
    "facebook": "",
    "instagram": "",
    "twitter": ""
  }
}
```

The header link will use: `https://www.youtube.com/watch_videos?video_ids=ABC123XYZ,DEF456UVW,GHI789RST`

#### Option B: Fallback Search

Leave `playlistVideoIds` as an empty array `[]` in the per-festival config. The header link will fallback to a YouTube search for the festival name.

## Updating an Existing Festival

### Modify Band Lineup

Edit the `data.json` in the festival folder:

```bash
nano 2026/NH/keene_music_festival_2026/data.json
```

- Add/remove bands in the `venues` array
- Update genres in the `genres` object
- Change festival details in the `festival` object

### Update Playlist

Edit the **per-festival** `config.json` to add/change video IDs:

```bash
nano 2026/NH/keene_music_festival_2026/config.json
```

Update the `playlistVideoIds` array.

### Change Default Festival

Edit `config.json` and update the `defaultFestival` path:

```json
{
  "defaultFestival": "2027/NH/keene_music_festival_2027",
  ...
}
```

## Design Customization

The design uses:
- **Fonts**: Caveat (headers), Patrick Hand (body)
- **Colors**: Earthy browns, tans, warm tones (#f5e6d3, #8b7355, #3d2817)
- **Patterns**: 90s/2000s lofi indie rock inspired textures
- **Background**: Keene downtown photo with overlay

To customize:
1. Venue colors are defined in each `data.json` `venues[].color`
2. CSS styles are in `index.html` `<style>` section
3. Patterns are defined per-venue in `data.json` `venues[].pattern`

## Deployment

### GitHub Pages

This project is designed to work with GitHub Pages:

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Add festival data"
   git push origin main
   ```

2. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` / `(root)`
   - Save

3. Your site will be available at: `https://yourusername.github.io/repository-name/`

**Note**: The `.nojekyll` file is included to prevent Jekyll processing.

## Testing

### Test Locally

1. Serve the directory with a local server (required for fetch() to work):
   ```bash
   python3 -m http.server 8000
   ```

2. Open in browser: `http://localhost:8000`

3. Test:
   - Header link opens YouTube playlist
   - Venue names link to Google Maps
   - Band names link to YouTube search
   - Search filters bands
   - View toggle switches between venue/genre
   - Footer lists all festivals
   - Poster is clickable

### Validate JSON

```bash
# Check syntax
python3 -m json.tool data.json
python3 -m json.tool config.json
```

## Common Issues

### Playlist link goes to search instead of playlist

- Check that `playlistVideoIds` in the **per-festival** `config.json` is not empty
- Verify video IDs are valid (11 characters, alphanumeric with dashes/underscores)
- Note: Each festival has its own `config.json` with playlist IDs

### Festival not loading

- Check console for errors
- Verify `data.json` syntax is valid
- Ensure paths in `config.json` match folder structure exactly
- Paths in `config.json` must start with `/` and end with `/`

### Venues not rendering

- Verify `venues` array exists in `data.json`
- Check that venue `id` contains only lowercase letters, numbers, and hyphens
- Ensure venue CSS class (`.venue-header.{id}`) exists in the template

### Search not working

- Bands must have `data-band` attribute
- Check browser console for JavaScript errors

## Folder Structure Examples

### Multiple States

```
2026/
├── NH/
│   ├── keene_music_festival_2026/
│   └── portsmouth_music_festival_2026/
├── VT/
│   └── burlington_music_festival_2026/
└── MA/
    └── boston_music_festival_2026/
```

### Multiple Years

```
2026/
└── NH/
    └── keene_music_festival_2026/
2027/
└── NH/
    └── keene_music_festival_2027/
2028/
└── NH/
    └── keene_music_festival_2028/
```

## Support

For issues or questions:
1. Check this README
2. Validate your JSON files
3. Check browser console for errors
4. Compare your structure to existing festivals

## License

MIT
