---
title: "Global Oil Palm Extent and Planting Year (1990-2021) v1.2"
date: 2026-11-03 12:00:00
permalink: /pages/36b9933f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "agriculture"
  - "biodiversity"
  - "biopama"
  - "conservation"
  - "crop"
  - "global"
  - "landcover"
  - "landuse"
  - "landuse-landcover"
  - "palm"
  - "plantation"
---

# Global Oil Palm Extent and Planting Year (1990-2021) v1.2

## 数据集简介

Global oil palm extent for 2016-2021 at 10 m resolution and oil palm
planting year from 1990 to 2021 at 30 m resolution. The dataset consists of
609 100x100 km grid tiles covering tropical and subtropical oil-palm-growing
regions worldwide, mapping 23.98 Mha of closed-canopy oil palm (16.69 Mha
[69.6%] industrial and 7.29 Mha [30.4%] smallholder), with a sample-based
area estimate of 16.82 ± 0.19 Mha industrial and 7.37 ± 0.25 Mha
smallholder. Note that although the catalog time range spans 1990-2021 to
reflect the planting year range, this collection is a single static mosaic
rather than a multi-temporal time series.

### Methodology

* **Oil Palm Extent (`classification`, 10 m):** Annual closed-canopy oil
  palm maps for 2016-2021 were generated from Sentinel-1 C-band SAR GRD
  dual-polarization (VV and VH) annual composites using a DeepLabv3+
  (MobileNetV2 backbone) convolutional neural network (CNN) trained on 296
  10x10 km regions. Daily Sentinel-1 scenes were corrected for local
  incident angle using the SRTM v4 DEM, aggregated into annual median
  composites separately for ascending and descending orbits, and averaged
  across both orbits to avoid terrain artifacts when one orbit had more
  passes. Unlike v1 (2019), Sentinel-2 red reflectance (Band 4) was excluded
  because systematic Sentinel-2 Level-2A coverage of oil palm regions was
  unavailable prior to 2019; to reuse the 3-channel DeepLabv3+ architecture
  from v1, the VV and VH composites were stacked with a zero-filled third
  channel.
* To reduce false positives (such as coconut plantations and paddy fields),
  overlapping cropland, built-up, waterbody, herbaceous wetland, and
  mangrove classes from ESA WorldCover 10 m v200 were masked out, followed
  by manual visual screening. In post-processing, 82 of the 100x100 km grid
  cells from the 2019 v1 dataset were discarded (mostly false-positive
  coconut regions in Mexico, India, the Philippines, and Indonesia) while
  new hotspot grid cells (Andhra Pradesh in India, Congo Basin, Thailand,
  and Central/South America) were added to arrive at the 609 tiles.
* The six annual maps (2016-2021) were merged into a single static layer
  prioritizing oil palm presence: a pixel is labeled industrial (`1`) if
  classified as industrial in any year during 2016-2021; otherwise
  smallholder (`2`) if classified as smallholder in any year during
  2016-2021; and other land cover (`0`) otherwise.
* **Planting Year (`planting_year`, 30 m):** Derived for all pixels mapped
  as oil palm (`1` or `2`) using 30 m Landsat-5, Landsat-7, and Landsat-8
  Collection 2 Tier 1 Level-2 surface reflectance time series from 1990
  to 2021. A Random Forest classifier labeled each clear Landsat observation
  as vegetation, bare land, or cloud to identify the Last Date of Land
  Preparation (LDLP)—the final bare-land observation corresponding to land
  clearing before canopy closure—smoothed with a spatial mode filter. The
  planting year is defined as the calendar year with the minimum `(NIR -
  SWIR2) / (NIR + SWIR2)` within the 5-year window preceding the LDLP
  (referred to as Normalized Difference Water Index, `NDWI (Gao, 1996)`, in
  the paper, though computed with `SWIR2` such as Landsat-8 Bands 5 and 7,
  which is the standard Normalized Burn Ratio [NBR] formula and named
  `minNBR` in the source GeoTIFF band description). In the `planting_year`
  band, values span `1989` to `2022` (rather than `1990` to `2021`): because
  the algorithm looks back up to 5 years before the LDLP, plantations
  established before 1990 (see the note below in limitations about
  left-censoring) are recorded as `1989` (~7.5% of oil palm pixels globally,
  the single most frequent value in the dataset), and a small fraction of
  pixels (~0.04%) have value `2022`.

### Limitations

* **Closed-canopy detection lag and 2019-2021 omission:** Sentinel-1 SAR
  reliably detects oil palm only after stands reach full canopy closure
  (typically ~3 years after planting). Consequently, newly established young
  plantations planted during 2019-2021 are largely omitted from the extent
  layer. Pixels with `planting_year` in 2019-2021 primarily represent
  **replanting (rotation) of older plantations** that already had a closed
  canopy during 2016-2018 before being clear-cut, and **must not** be used
  to measure new oil palm expansion or deforestation between 2019 and 2021.
* **Last rotation vs. initial establishment and 1989 left-censoring:**
  Because the algorithm detects the *last* bare-land clearing event prior to
  2021, `planting_year` records the establishment year of the current stand
  as of 2021. In plantations that have undergone rotation (typically every
  ~25 years), this reflects the most recent replanting year rather than
  initial conversion to oil palm. Additionally, `planting_year` is
  *left-censored* at `1989`; this means pixels with `planting_year == 1989`
  (~7.5% of oil palm pixels globally) represent plantations established in
  or before 1989 and should not be treated as literally planted in 1989 when
  calculating plantation age.
* **Post-clearing land-use conversion:** Because the 2016-2021 merge rule
  retains any pixel detected as oil palm in at least one year, plantations
  clear-cut between 2016 and 2021 and subsequently converted to a different
  land use remain classified as oil palm.
* **Omission of open-canopy and semi-wild oil palm:** The CNN only maps
  closed-canopy stands and largely omits traditional, scattered, or
  subsistence semi-wild oil palm groves (particularly in West Africa, such
  as Nigeria) as well as stands with open canopies caused by fire, flooding,
  disease, or agroforestry intercropping.
* **Lower accuracy in smallholder plantations:** Across all 6,843
  ground-truth planting-year observations, overall planting-year RMSE is
  2.65 years (Mean Error = -0.24 years, R^2 = 0.86). Against visual
  interpretation of Landsat time series (n = 841 points), exact-year
  agreement of the Random Forest LDLP was only 59.6% overall (64.8%
  industrial, 44.0% smallholder; 76.3% within ±3 years). Smallholder
  plantations have lower classification accuracy (producer's accuracy 71.7%,
  user's accuracy 72.4%) and higher planting-year error (RMSE = 4.89 years,
  reaching 7.01 years in Cameroon) than industrial plantations (producer's
  accuracy 91.0%, user's accuracy 91.8%, planting-year RMSE = 2.02 years).
  Smallholder planting-year accuracy is degraded by mixed 30 m pixels along
  irregular plot boundaries, multi-year sequential planting, and
  "under-planting" (planting seedlings beneath old palms prior to felling,
  which avoids a bare-soil stage).
* **Narrow geographic coverage of field validation:** Field validation of
  `planting_year` had narrow geographic coverage: only 3 countries for
  industrial plantations (Brazil, Gabon, Indonesia) and 2 countries for
  smallholders (Cameroon and Indonesia, 93.5% collected by a single company
  via owner interviews, which are also subject to owner recall error on
  older stands), with no field validation in Malaysia, Thailand, India, or
  other producing regions.
* **Resolution mismatch and grid offset between bands:** Because
  `classification` is at 10 m and `planting_year` is at 30 m (with a 20 m
  West-edge origin offset between the source GeoTIFF grids), ~5% of 10 m
  oil palm pixels along plantation edges lack a `planting_year` value, and
  30 m `planting_year` pixels along boundaries can spill onto adjacent 10 m
  non-oil-palm (`0`) pixels.
* **Regional artifacts from clouds and seasonality:** Persistent cloud cover
  and sparse pre-2013 Landsat archive coverage in Equatorial and West Africa
  (e.g., Cameroon, Gabon, Congo Basin) increase planting-year uncertainty.
  In regions with strong dry seasons (notably Andhra Pradesh in India,
  Thailand, and Sulawesi in Indonesia), seasonal drops in NDWI can trigger
  false bare-land detections, biasing `planting_year` toward overly recent
  years.

## 基本信息

- 数据集编号（Earth Engine ID）：`BIOPAMA/GlobalOilPalm/v1_2`
- 数据类型：影像集合（ImageCollection）
- 提供方：Biopama Programme、Google Earth Engine
- 时间范围：1990-01-01 至 2021-12-31
- 许可：CC-BY-4.0
- 关键词：agriculture, biodiversity, biopama, conservation, crop, global, landcover, landuse, landuse-landcover, palm, plantation

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| classification | Oil palm plantation type classification | 10 |  |
| planting_year | Estimated year of plantation establishment | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('BIOPAMA/GlobalOilPalm/v1_2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/BIOPAMA_GlobalOilPalm_v1_2
- 数据引用：Descals, A., Gaveau, D. L., Wich, S., Szantoi, Z., and Meijaard, E. (2024).
Global mapping of oil palm planting year from 1990 to 2021.
Earth System Science Data, 16(11), 5111-5129.
[doi:10.5194/essd-16-5111-2024](https://doi.org/10.5194/essd-16-5111-2024)

- DOI：10.5194/essd-16-5111-2024

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
