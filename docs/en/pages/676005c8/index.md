---
title: "Brazil Forest Imagery Dataset 2008: Visual Basemap"
date: 2026-11-03 12:00:00
---

# Brazil Forest Imagery Dataset 2008: Visual Basemap

Original name: Brazil Forest Imagery Dataset 2008: Visual Basemap

## What this dataset is

This dataset provides a visual imagery basemap of Brazil with up to 5-meter resolution, primarily captured in 2008, to support implementation of the [Brazil Forest Code](https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/L12651compilado.htm). The mosaic is synthesized from SPOT 2, 4, and 5 satellite data. It serves as a high-resolution alternative to Landsat for identifying consolidated areas, Permanent Protection Areas (APPs), and legal reserves as they existed on the July 22, 2008 regulatory deadline. Gaps in SPOT coverage are represented by a transparent mask to maintain data integrity.

### Why Google created this basemap

While raw image collections are also available (see [MS](/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_V1), [MS_NC](/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_NC_V1), [PMS_NC](/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PMS_NC_V1), [PAN](/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PAN_V1)), Google synthesized this mosaic to provide a seamless, ready-to-use product. By performing radiometric and geometric corrections at scale, Google transformed raw, disparate satellite scenes into a unified layer that allows for immediate visualization within applications like [SICAR](https://car.gov.br) (the Rural Environmental Registry System of Brazil).

### Geographic prioritization and coverage

To maximize immediate environmental impact, image selection prioritized achieving near-complete, high-resolution coverage for privately held lands registered in the **Rural Environmental Registry (CAR)**. Specific focus was given to the **Amazon biome** and five states in the **"Arc of Deforestation"** - Maranhão, Mato Grosso, Pará, Rondônia, and Tocantins - where there is an average of 93% state-wide coverage. The average coverage across Brazil is 68% in v1. Gaps in coverage are represented by a transparent mask to maintain data integrity where high-quality 2008-era imagery was unavailable.

### Processing methodology

Please see the [methodology guide](/earth-engine/guides/spot_brazil_forest_imagery_dataset_2008_v1) for an in-depth description of the processing, including:

* **Radiometric calibration:** Raw digital numbers were converted to TOA reflectance using band-specific physical gain and bias metadata, normalized by solar irradiance and Earth-Sun distance.
* **Radiometric normalization:** To minimize inter-image radiometric discontinuities pixel values were adjusted via histogram matching to a consistent Landsat 2008 mosaic target.
* **Edge refinement:** Google applied a 2.5-pixel focal minimum erosion to image masks to remove lossy compression artifacts present in the source data.
* **Cloud masking:** Trained surveyors manually delineated polygons around clouds and shadows, which were converted to a mask to ensure that only the most useful pixels are included in the composite.
* **Automated misregistration correction:** Select scenes were coregistered using the `ee.Image.register` algorithm against a 2008-era Landsat reference composite.
* **Composition:** The final mosaic prioritizes the highest resolution pixels available, layering SPOT 5 imagery (10 m) on top of SPOT 4 and 2\.

### Limitations and known issues

* **Spatial completeness:** Gaps exist where no imagery met the project’s strict 2008-era temporal window (2007–2009), cloud-cover thresholds, or quality standards.
* **Variable native resolution:**Boundaries between different nominal resolutions of source imagery may be visible because nearest neighbor resampling was used during processing..
* **Residual misregistration:** Spatial shifts may persist in some areas, particularly in regions with extreme terrain relief or dense, homogeneous forest areas.
* **Atmospheric and cloud artifacts:** Manual cloud masking is not exhaustive; users may encounter occasional residual artifacts like thin cirrus haze or small cloud shadows.
* **Radiometric inconsistency:** Residual spectral variation remains between adjacent images, which may increase spectral variance and reduce the precision of class separation during machine learning inference.
* **Spectral saturation:** In areas of extreme brightness, pixels may reach the sensor’s maximum detectable limit, resulting in a loss of texture and detail.

### Data access

To access this dataset, please fill out the [request form](https://forms.gle/jQmCbWgarjENQBYz6).

## Coverage and time range

- Coverage: Brazil
- Time range: 2007-01-01 至 2009-11-26

## Resolution and specifications

- Spatial resolution: about 5 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| R | Red reflectance | 5 |  |
| G | Green reflectance | 5 |  |
| B | Blue reflectance, representing the synthetic blue channel of the pseudo-natural color product for SPOT 2, 4, and 5 | 5 |  |
| date | Observation date as epoch (seconds) | 5 |  |
| scale | Pixel size of source image (see [Methodology](/earth-engine/guides/spot_brazil_forest_imagery_dataset_2008_v1)) | 5 |  |
| satellite | Source satellite (SPOT 2, 4, or 5) | 5 |  |
| coregistered | Boolean: 1 if automated misregistration correction was applied (see [Methodology](/earth-engine/guides/spot_brazil_forest_imagery_dataset_2008_v1)) | 5 |  |

## What you can use it for

- Brazil Forest Code compliance analysis
- Historical land cover and deforestation mapping
- Rural Environmental Registry (CAR) verification

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('GOOGLE/BRAZIL_FOREST_2008/V1/VISUAL');
```

- Earth Engine ID: `GOOGLE/BRAZIL_FOREST_2008/V1/VISUAL`
- Providers: Google, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_BRAZIL_FOREST_2008_V1_VISUAL

## License and citation

- License: proprietary
- Keywords: brazil, deforestation, forest-code, google, rgb, satellite-imagery, spot
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Brazil Forest Imagery Dataset 2008: Analytic Basemap](/pages/9ead8e0f/)
- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [ESA CCI Above-Ground Biomass for 2007, 2010, 2015-2022 (v6.0)](/en/pages/e9028b43/)
- [WAPOR Actual Evapotranspiration and Interception 2.0](/en/pages/f46d014b/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
