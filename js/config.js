'use strict';

const displayMaterialOptions = {
    shading: false,
    colorful: true,
    bloom: true,
    sunrays: true
};

const params = {
    SIM_RESOLUTION: 128,
    DYE_RESOLUTION: 1024,
    CAPTURE_RESOLUTION: 512,
    DENSITY_DISSIPATION: 1,
    VELOCITY_DISSIPATION: 0.2,
    PRESSURE: 0.8,
    PRESSURE_ITERATIONS: 20,
    CURL: 30,
    SPLAT_RADIUS: 0.25,
    SPLAT_FORCE: 6000,
    SHADING: displayMaterialOptions.shading,
    COLORFUL: displayMaterialOptions.colorful,
    COLOR_UPDATE_SPEED: 10,
    PAUSED: false,
    BACK_COLOR: { r: 0, g: 0, b: 0 },
    TRANSPARENT: false,
    BLOOM: displayMaterialOptions.bloom,
    BLOOM_ITERATIONS: 8,
    BLOOM_RESOLUTION: 256,
    BLOOM_INTENSITY: 0.8,
    BLOOM_THRESHOLD: 0.6,
    BLOOM_SOFT_KNEE: 0.7,
    SUNRAYS: displayMaterialOptions.sunrays,
    SUNRAYS_RESOLUTION: 196,
    SUNRAYS_WEIGHT: 1.0
};
