# Build Scripts

This directory contains scripts for building and managing the textbook PDFs.

## Available Scripts

### `build.js`
Main build script for generating PDFs from HTML/CSS source files.

**Usage:**
```bash
npm run build
```

### `build-chapter.js`
Build a specific chapter by number or name.

**Usage:**
```bash
npm run build:chapter -- 1
npm run build:chapter -- "Introduction to Systems Thinking"
```

### `validate.js`
Validate PDF quality and formatting.

**Usage:**
```bash
npm run validate
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Script Structure

Scripts will be added as the project develops. Current structure:

- `build.js` - Main PDF generation script
- `build-chapter.js` - Chapter-specific builds
- `validate.js` - Quality validation

## Requirements

- Node.js 16+
- Playwright
- Source HTML/CSS files in `source/` directory

---

*Note: Scripts are placeholders for future development. Actual implementation will be added as the project evolves.*
