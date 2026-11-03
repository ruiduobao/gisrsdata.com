---
title: "NEON Surface Bidirectional Reflectance"
date: 2026-11-03 12:00:00
permalink: /pages/5eca6c2f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "airborne"
  - "forest"
  - "highres"
  - "hyperspectral"
  - "neon"
  - "satellite-imagery"
  - "surface-reflectance"
  - "vegetation"
---

# NEON Surface Bidirectional Reflectance

## 数据集简介

The NEON AOP Surface Bidirectional Reflectance is a hyperspectral VSWIR (visible
to shortwave infrared) data product, containing 426 bands spanning wavelengths
from ~380 nm to 2510 nm. Reflectance is scaled by a factor of 10000. Wavelengths
between 1340-1445 nm and 1790-1955 nm are set to -100; these are water vapor
absorption bands without valid values. The dataset also contains QA
raster bands. Major processing steps include orthorectification, plus atmospheric,
topographic, and Bidirecitonal Reflectance Distribution Function (BRDF) corrections.
Data are collected by one of three [NEON Imaging Spectrometer (NIS)](
https://www.neonscience.org/data-collection/imaging-spectrometer) sensors,
AVIRIS-NG spectrometers built by NASA's Jet Propulsion Lab (JPL). Reflectance is
converted to a mosaic using the nadir-most pixels from the flight lines acquired
with the least cloud cover. Spatial resolution is 1 m and spectral resolution
is ~5 nm. The center wavelength and full width half max (FWHM) for each band are
provided in the Image Properties. Availability in GEE may not represent full
availability in the NEON Data Portal (linked below). Additional sites and years
can be added to GEE upon request by emailing listaopgee@battelleecology.org.

See [NEON Data Product
DP3.30006.002](https://data.neonscience.org/data-products/DP3.30006.002) for
more details.

Get started by exploring the [Intro to AOP Data in Google Earth Engine Tutorial Series](
https://www.neonscience.org/resources/learning-hub/tutorials/intro-aop-data-google-earth-engine-tutorial-series)

Browse and interact with AOP data in the [NEON AOP GEE Data Viewer App](
https://neon-prod-earthengine.projects.earthengine.app/view/neon-aop-gee-data-viewer---desktop)

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/neon-prod-earthengine/assets/HSI_REFL/002`
- 数据类型：影像集合（ImageCollection）
- 提供方：NEON、Google Earth Engine
- 时间范围：2013-01-01 至 2026-08-08
- 空间分辨率：1 米
- 许可：proprietary
- 关键词：airborne, forest, highres, hyperspectral, neon, satellite-imagery, surface-reflectance, vegetation

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B001 | VNIR Band B001 | 1 | 382.2587nm, FWHM: 5.6785nm |
| B002 | VNIR Band B002 | 1 | 387.2674nm, FWHM: 5.6774nm |
| B003 | VNIR Band B003 | 1 | 392.2761nm, FWHM: 5.6762nm |
| B004 | VNIR Band B004 | 1 | 397.2848nm, FWHM: 5.6751nm |
| B005 | VNIR Band B005 | 1 | 402.2935nm, FWHM: 5.674nm |
| B006 | VNIR Band B006 | 1 | 407.3022nm, FWHM: 5.6729nm |
| B007 | VNIR Band B007 | 1 | 412.3109nm, FWHM: 5.6719nm |
| B008 | VNIR Band B008 | 1 | 417.3195nm, FWHM: 5.6708nm |
| B009 | VNIR Band B009 | 1 | 422.3282nm, FWHM: 5.6697nm |
| B010 | VNIR Band B010 | 1 | 427.3369nm, FWHM: 5.6687nm |
| B011 | VNIR Band B011 | 1 | 432.3455nm, FWHM: 5.6677nm |
| B012 | VNIR Band B012 | 1 | 437.3542nm, FWHM: 5.6667nm |
| B013 | VNIR Band B013 | 1 | 442.363nm, FWHM: 5.6657nm |
| B014 | VNIR Band B014 | 1 | 447.3716nm, FWHM: 5.6647nm |
| B015 | VNIR Band B015 | 1 | 452.3804nm, FWHM: 5.6638nm |
| B016 | VNIR Band B016 | 1 | 457.389nm, FWHM: 5.6628nm |
| B017 | VNIR Band B017 | 1 | 462.3978nm, FWHM: 5.6619nm |
| B018 | VNIR Band B018 | 1 | 467.4064nm, FWHM: 5.661nm |
| B019 | VNIR Band B019 | 1 | 472.415nm, FWHM: 5.6601nm |
| B020 | VNIR Band B020 | 1 | 477.4238nm, FWHM: 5.6592nm |
| B021 | VNIR Band B021 | 1 | 482.4324nm, FWHM: 5.6583nm |
| B022 | VNIR Band B022 | 1 | 487.4412nm, FWHM: 5.6575nm |
| B023 | VNIR Band B023 | 1 | 492.4498nm, FWHM: 5.6566nm |
| B024 | VNIR Band B024 | 1 | 497.4585nm, FWHM: 5.6558nm |
| B025 | VNIR Band B025 | 1 | 502.4672nm, FWHM: 5.655nm |
| B026 | VNIR Band B026 | 1 | 507.4759nm, FWHM: 5.6542nm |
| B027 | VNIR Band B027 | 1 | 512.4846nm, FWHM: 5.6534nm |
| B028 | VNIR Band B028 | 1 | 517.4932nm, FWHM: 5.6526nm |
| B029 | VNIR Band B029 | 1 | 522.502nm, FWHM: 5.6519nm |
| B030 | VNIR Band B030 | 1 | 527.5106nm, FWHM: 5.6511nm |
| B031 | VNIR Band B031 | 1 | 532.5194nm, FWHM: 5.6504nm |
| B032 | VNIR Band B032 | 1 | 537.528nm, FWHM: 5.6497nm |
| B033 | VNIR Band B033 | 1 | 542.5367nm, FWHM: 5.649nm |
| B034 | VNIR Band B034 | 1 | 547.5454nm, FWHM: 5.6483nm |
| B035 | VNIR Band B035 | 1 | 552.5542nm, FWHM: 5.6476nm |
| B036 | VNIR Band B036 | 1 | 557.5628nm, FWHM: 5.647nm |
| B037 | VNIR Band B037 | 1 | 562.5714nm, FWHM: 5.6463nm |
| B038 | VNIR Band B038 | 1 | 567.5802nm, FWHM: 5.6457nm |
| B039 | VNIR Band B039 | 1 | 572.5888nm, FWHM: 5.6451nm |
| B040 | VNIR Band B040 | 1 | 577.5974nm, FWHM: 5.6445nm |
| B041 | VNIR Band B041 | 1 | 582.6062nm, FWHM: 5.6439nm |
| B042 | VNIR Band B042 | 1 | 587.6148nm, FWHM: 5.6433nm |
| B043 | VNIR Band B043 | 1 | 592.6236nm, FWHM: 5.6428nm |
| B044 | VNIR Band B044 | 1 | 597.6322nm, FWHM: 5.6422nm |
| B045 | VNIR Band B045 | 1 | 602.641nm, FWHM: 5.6417nm |
| B046 | VNIR Band B046 | 1 | 607.6496nm, FWHM: 5.6412nm |
| B047 | VNIR Band B047 | 1 | 612.6584nm, FWHM: 5.6407nm |
| B048 | VNIR Band B048 | 1 | 617.667nm, FWHM: 5.6402nm |
| B049 | VNIR Band B049 | 1 | 622.6757nm, FWHM: 5.6397nm |
| B050 | VNIR Band B050 | 1 | 627.6844nm, FWHM: 5.6393nm |
| B051 | VNIR Band B051 | 1 | 632.693nm, FWHM: 5.6388nm |
| B052 | VNIR Band B052 | 1 | 637.7017nm, FWHM: 5.6384nm |
| B053 | VNIR Band B053 | 1 | 642.7104nm, FWHM: 5.638nm |
| B054 | VNIR Band B054 | 1 | 647.7191nm, FWHM: 5.6376nm |
| B055 | VNIR Band B055 | 1 | 652.7278nm, FWHM: 5.6372nm |
| B056 | VNIR Band B056 | 1 | 657.7365nm, FWHM: 5.6368nm |
| B057 | VNIR Band B057 | 1 | 662.7452nm, FWHM: 5.6365nm |
| B058 | VNIR Band B058 | 1 | 667.7538nm, FWHM: 5.6361nm |
| B059 | VNIR Band B059 | 1 | 672.7626nm, FWHM: 5.6358nm |
| B060 | VNIR Band B060 | 1 | 677.7712nm, FWHM: 5.6355nm |
| B061 | VNIR Band B061 | 1 | 682.78nm, FWHM: 5.6352nm |
| B062 | VNIR Band B062 | 1 | 687.7886nm, FWHM: 5.6349nm |
| B063 | VNIR Band B063 | 1 | 692.7974nm, FWHM: 5.6347nm |
| B064 | VNIR Band B064 | 1 | 697.806nm, FWHM: 5.6344nm |
| B065 | VNIR Band B065 | 1 | 702.8148nm, FWHM: 5.6342nm |
| B066 | VNIR Band B066 | 1 | 707.8233nm, FWHM: 5.6339nm |
| B067 | VNIR Band B067 | 1 | 712.832nm, FWHM: 5.6337nm |
| B068 | VNIR Band B068 | 1 | 717.8408nm, FWHM: 5.6335nm |
| B069 | VNIR Band B069 | 1 | 722.8495nm, FWHM: 5.6334nm |
| B070 | VNIR Band B070 | 1 | 727.858nm, FWHM: 5.6332nm |
| B071 | VNIR Band B071 | 1 | 732.8668nm, FWHM: 5.633nm |
| B072 | VNIR Band B072 | 1 | 737.8754nm, FWHM: 5.6329nm |
| B073 | VNIR Band B073 | 1 | 742.8842nm, FWHM: 5.6328nm |
| B074 | VNIR Band B074 | 1 | 747.8928nm, FWHM: 5.6327nm |
| B075 | VNIR Band B075 | 1 | 752.9016nm, FWHM: 5.6326nm |
| B076 | VNIR Band B076 | 1 | 757.9102nm, FWHM: 5.6325nm |
| B077 | VNIR Band B077 | 1 | 762.9189nm, FWHM: 5.6324nm |
| B078 | VNIR Band B078 | 1 | 767.9276nm, FWHM: 5.6324nm |
| B079 | VNIR Band B079 | 1 | 772.9364nm, FWHM: 5.6323nm |
| B080 | VNIR Band B080 | 1 | 777.945nm, FWHM: 5.6323nm |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/neon-prod-earthengine/assets/HSI_REFL/002');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_neon-prod-earthengine_assets_HSI_REFL_002
- 数据引用：See [NEON citation guidelines](https://www.neonscience.org/data-samples/guidelines-policies/citing)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
