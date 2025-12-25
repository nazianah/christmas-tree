# 🎄 Grand Luxury Interactive Christmas Tree

An immersive, high-fidelity 3D Christmas tree experience featuring hand gesture control, dynamic chaos-to-order assembly, and luxurious emerald and gold aesthetics.

## 📝 Prompt

Gemini 3 in Google AI Studio and Claude 4.5 Sonnet in Cursor:

```
Role: You are a senior creative 3D developer experienced with React 19, TypeScript, and Three.js (R3F).
Objective: Build a high-fidelity 3D Web app named "Grand Luxury Interactive Christmas Tree." The visual style should convey an over-the-top luxurious aesthetic (dramatic emerald and high-gloss gold), with cinematic bloom/glow.
Tech stack: React 19, TypeScript, React Three Fiber, Drei, Postprocessing, Tailwind CSS.

Core logic & architecture:
- State machine: Two states — CHAOS (scattered) and FORMED (assembled) — that morph between each other.
- Dual-Position System: Each element (foliage, ornaments) has two positions: ChaosPosition (random positions inside a sphere) and TargetPosition (positions forming a cone/tree). Interpolate (lerp) between these positions in useFrame according to an animation progress value.

Implementation details:
- Foliage: Render many points using THREE.Points and a custom ShaderMaterial for performant, stylized needles.
- Ornaments: Use InstancedMesh for efficient rendering. Categorize instances by weight/behavior (heavy gift boxes, lightweight baubles, tiny decorative lights) and give them different physics/lerp behaviors for smooth settling animations.
- Postprocessing: Enable Bloom (threshold ~0.8, intensity ~1.2) to create a golden halo.
- Scene: Camera at [0, 4, 20], use a Lobby HDRI for environment lighting.
- Add many polaroid-style photos as decorations on/around the tree.
- Use webcam-based hand gesture detection (MediaPipe) where an open hand "unleashes" chaos and a closed fist restores the tree; hand movement affects camera angle.
```

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd grand-luxury-interactive-christmas-tree
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   
   > 📝 Note: Local dev mode uses localStorage for sharing (works in same browser only)
   > For full cloud sharing, see step 4

4. **Configure Cloudflare (Optional - for cloud sharing):**
   - Follow the detailed guide in `cloudflare-setup.md`
   - Copy `env.example` to `.env.local` and fill in your Cloudflare credentials
   - Use `npm run dev:vercel` to test with full Vercel environment

5. **Open your browser:**
   - Navigate to `http://localhost:3000`
   - Allow camera access for gesture control
   - Click "Upload Photos" to upload your photos


## 🎯 Usage

### Photo Upload & Sharing

1. **Upload Photos:**
   - Click the "Upload Photos" button to select up to 22 images
   - Photos will appear as polaroids on the Christmas tree

2. **Generate Share Link:**
   - After uploading photos, click "Generate share link"
   - Wait 2-3 seconds for the upload to complete
   - Copy the generated link and share with friends

3. **View Shared Photos:**
   - Friends can open the share link in any browser
   - Photos will automatically load on the Christmas tree
   - No login or app installation required
   - Links expire after 30 days

### Gesture Controls

1. **Position your hand** in front of the webcam (visible in top-right preview)
2. **Move your hand** to control the camera angle:
   - Left/Right: Horizontal rotation
   - Up/Down: Vertical tilt
3. **Open your hand** (spread all fingers): Unleash chaos mode
4. **Close your fist**: Restore tree to formed mode

### Mouse Controls

When no hand is detected, you can:
- **Click and drag** to rotate the view
- **Scroll** to zoom in/out
- **Right-click and drag** to pan (disabled by default)

## 🏗️ Tech Stack

### Frontend
- React 19 with TypeScript
````markdown
# 🎄 Grand Luxury Interactive Christmas Tree

An immersive, high-fidelity 3D Christmas tree experience featuring hand gesture control, dynamic chaos-to-order assembly, and luxurious emerald and gold aesthetics.

## 📝 Prompt

Gemini 3 in Google AI Studio and Claude 4.5 Sonnet in Cursor (translated):

```
Role: You are a senior creative 3D developer experienced with React 19, TypeScript, and Three.js (R3F).
Objective: Build a high-fidelity 3D Web app named "Grand Luxury Interactive Christmas Tree." The visual style should convey an over-the-top luxurious aesthetic (think dramatic emerald and high-gloss gold), with cinematic bloom/glow.
Tech stack: React 19, TypeScript, React Three Fiber, Drei, Postprocessing, Tailwind CSS.

Core logic & architecture:
- State machine: Two states — CHAOS (scattered) and FORMED (assembled) — that morph between each other.
- Dual-Position System: Each element (foliage, ornaments) has two positions: ChaosPosition (random positions inside a sphere) and TargetPosition (positions forming a cone/tree). Interpolate (lerp) between these positions in useFrame according to an animation progress value.

Implementation details:
- Foliage: Render many points using THREE.Points and a custom ShaderMaterial for performant, stylized needles.
- Ornaments: Use InstancedMesh for efficient rendering. Categorize instances by weight/behavior (heavy gift boxes, lightweight baubles, tiny decorative lights) and give them different physics/lerp behaviors for smooth settling animations.
- Postprocessing: Enable Bloom (threshold ~0.8, intensity ~1.2) to create a golden halo.
- Scene: Camera at [0, 4, 20], use a Lobby HDRI for environment lighting.
- Add many polaroid-style photos as decorations on/around the tree.
- Use webcam-based hand gesture detection (MediaPipe) where an open hand "unleashes" chaos and a closed fist restores the tree; hand movement affects camera angle.
```

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd grand-luxury-interactive-christmas-tree
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   
   > 📝 Note: Local dev mode uses localStorage for sharing (works in the same browser only).
   > For full cloud sharing, see step 4.

4. **Configure Cloudflare (Optional - for cloud sharing):**
   - Follow the detailed guide in `cloudflare-setup.md`
   - Copy `env.example` to `.env.local` and fill in your Cloudflare credentials
   - Use `npm run dev:vercel` to test with the full Vercel environment

5. **Open your browser:**
   - Navigate to `http://localhost:3000`
   - Allow camera access for gesture control
   - Click "Upload Photos" to upload your photos


## 🎯 Usage

### Photo Upload & Sharing

1. **Upload Photos:**
   - Click the "Upload Photos" button to select up to 22 images
   - Photos will appear as polaroids on the Christmas tree

2. **Generate Share Link:**
   - After uploading photos, click "Generate share link"
   - Wait 2–3 seconds for the upload to complete
   - Copy the generated link and share with friends

3. **View Shared Photos:**
   - Friends can open the share link in any browser
   - Photos will automatically load on the Christmas tree
   - No login or app installation required
   - Links expire after 30 days

### Gesture Controls

1. **Position your hand** in front of the webcam (visible in the top-right preview)
2. **Move your hand** to control the camera angle:
   - Left/Right: Horizontal rotation
   - Up/Down: Vertical tilt
3. **Open your hand** (spread all fingers): Unleash chaos mode
4. **Close your fist**: Restore tree to formed mode

### Mouse Controls

When no hand is detected, you can:
- **Click and drag** to rotate the view
- **Scroll** to zoom in/out
- **Right-click and drag** to pan (disabled by default)

### Mobile & Touch Controls

The app is **responsive and mobile-friendly**:

**On devices with camera access:**
- Hand gesture control works as described above (open/close hand, move for camera angle)

**On devices without camera (or camera permission denied):**
- Two fallback buttons appear in the top-right corner:
  - **Unleash** button — Toggles chaos mode
  - **Restore** button — Returns to formed mode

**Touch controls (all devices):**
- **Swipe left/right** — Rotate the tree horizontally
- **Swipe up/down** — Tilt the tree vertically
- **Pinch in/out** — Zoom in/out

**Optimized for mobile:**
- Touch targets are sized for easy tapping (44×44px minimum)
- Responsive text sizing (smaller on mobile, larger on desktop)
- Fallback UI when camera is unavailable

## 🏗️ Tech Stack

### Frontend
- React 19 with TypeScript
- React Three Fiber (R3F) for 3D rendering
- Three.js for WebGL graphics
- @react-three/drei for helpers
- @react-three/postprocessing for visual effects
- MediaPipe for hand gesture detection
- Tailwind CSS for styling

### Backend (Photo Sharing)
- Vercel Serverless Functions
- Cloudflare R2 (S3-compatible object storage)
- Cloudflare KV (key-value storage)
- AWS SDK S3 Client for R2 integration

### Features
- Hand gesture control via webcam
- Dynamic state transitions (CHAOS ↔ FORMED)
- Photo upload and cloud sharing
- Temporary share links (30-day expiration)
- Instanced rendering for performance
- Bloom and post-processing effects

## 🎅 Happy Holidays, jhakri nazianah!

Made with ✨ for your festive season.

May your code be merry and bright! 🎄✨

````
