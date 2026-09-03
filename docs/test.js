const { test, expect } = require('@playwright/test');

test('can see the bands organized by genre', async ({ page }) => {
  // Navigate to the page
  await page.goto(`file://${__dirname}/../index.html`);

  // Initially should show venue view
  await expect(page.locator('#venueContainer')).toBeVisible();
  await expect(page.locator('#genreContainer')).not.toBeVisible();

  // Click the "By Genre" button
  await page.click('#genreView');

  // Now genre view should be visible
  await expect(page.locator('#genreContainer')).toBeVisible();
  await expect(page.locator('#venueContainer')).not.toBeVisible();

  // Check that genre sections exist
  const genreSections = page.locator('.genre-section');
  await expect(genreSections).toHaveCount(8); // We have 8 genres

  // Verify specific genres are present
  const genres = ['Rock', 'Folk', 'Indie', 'Electronic', 'Jazz', 'Acoustic', 'Alternative', 'Experimental'];
  for (const genre of genres) {
    await expect(page.locator(`.genre-section[data-genre="${genre}"]`)).toBeVisible();
    await expect(page.locator(`.genre-header:has-text("${genre}")`)).toBeVisible();
  }

  // Verify that bands are grouped under genres
  const rockSection = page.locator('.genre-section[data-genre="Rock"]');
  await expect(rockSection.locator('.band')).toHaveCount(5);

  const folkSection = page.locator('.genre-section[data-genre="Folk"]');
  await expect(folkSection.locator('.band')).toHaveCount(6);

  // Verify a specific band is in the right genre
  const rockBands = rockSection.locator('.band');
  await expect(rockBands.filter({ hasText: 'Havrok' })).toBeVisible();

  // Can switch back to venue view
  await page.click('#venueView');
  await expect(page.locator('#venueContainer')).toBeVisible();
  await expect(page.locator('#genreContainer')).not.toBeVisible();
});
