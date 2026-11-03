---
title: "Land Cover of North America at 30 meters, 2020"
date: 2026-11-03 12:00:00
permalink: /pages/b25aaa54/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "landcover"
  - "landsat"
  - "landuse-landcover"
  - "nlcd"
  - "reflectance"
---

# Land Cover of North America at 30 meters, 2020

## 数据集简介

The 2020 North American Land Cover 30-meter dataset was produced as part of
the North American Land Change Monitoring System (NALCMS), a trilateral
effort between Natural Resources Canada, the United States Geological
Survey, and three Mexican organizations including the National Institute of
Statistics and Geography (Instituto Nacional de Estad&iacute;stica y
Geograf&iacute;a), National Commission for the Knowledge and Use of the
Biodiversity (Comisi&oacute;n Nacional Para el Conocimiento y Uso de la
Biodiversidad), and the National Forestry Commission of Mexico
(Comisi&oacute;n Nacional Forestal).  The collaboration is facilitated by
the Commission for Environmental Cooperation, an international organization
created by the Canada, Mexico, and United States governments under the North
American Agreement on Environmental Cooperation to promote environmental
collaboration between the three countries.

The general objective of NALCMS is to devise, through collective effort, a
harmonized multi-scale land cover monitoring approach which ensures high
accuracy and consistency in monitoring land cover changes at the North
American scale and which meets each country's specific requirements.

This 30-meter dataset of North American Land Cover reflects land cover
information for 2020 from Mexico and Canada, 2019 over the conterminous
United States and 2021 over Alaska.  Each country developed its own
classification method to identify Land Cover classes and then provided an
input layer to produce a continental Land Cover map across North America.
Canada, Mexico, and the United States developed their own 30-meter land
cover products; see specific sections on data generation below.

The main inputs for image classification were 30-meter Landsat 8 Collection
2 Level 1 data in the three countries (Canada, the United States and
Mexico). Image selection processes and reduction to specific spectral bands
varied among the countries due to study-site-specific requirements.  While
Canada selected most images from the year 2020 with a few from 2019 and
2021, the Conterminous United States employed mainly images from 2019, while
Alaska land cover maps are mainly based on the use of images from 2021. The
land cover map for Mexico was based on land cover change detection between
2015 and 2020 Mexico Landsat 8 mosaics.

In order to generate a seamless and consistent land cover map of North
America, national maps were generated for Canada by the CCRS; for Mexico by
CONABIO, INEGI, and CONAFOR; and for the United States by the USGS. Each
country chose their own approaches, ancillary data, and land cover mapping
methodologies to create national datasets. This North America dataset was
produced by combining the national land cover datasets.  The integration of
the three national products merged four Land Cover map sections, Alaska,
Canada, the conterminous United States and Mexico.

See also:

* Natural Resources Canada has North American Land Cover information
  available online at
  [https://open.canada.ca/data/en/dataset/ee1580ab-a23d-4f86-a09b-79763677eb47](
  https://open.canada.ca/data/en/dataset/ee1580ab-a23d-4f86-a09b-79763677eb47)

* The National Commission for the Knowledge and Use of Biodiversity has
  North American Land Cover information available online at
  [https://www.biodiversidad.gob.mx/monitoreo/cobertura-suelo](
    https://www.biodiversidad.gob.mx/monitoreo/cobertura-suelo)

* The U.S. Geological Survey has North American Land Cover information
  available online at [www.mrlc.gov](https://www.mrlc.gov)

## 基本信息

- 数据集编号（Earth Engine ID）：`USGS/NLCD_RELEASES/2020_REL/NALCMS`
- 数据类型：影像（Image）
- 提供方：The Commission for Environmental Cooperation (CEC)、Google Earth Engine
- 时间范围：2019-01-01 至 2021-12-31
- 空间分辨率：30 米
- 许可：CC0-1.0
- 关键词：landcover, landsat, landuse-landcover, nlcd, reflectance

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| landcover | Land cover classification grid cell value. Values are categorized into the following. [Product Legend](   https://www.mrlc.gov/sites/default/files/inline-images/2005_nalcms_large_0.jpg). The classes in the 2020 product legend are given below.  | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('USGS/NLCD_RELEASES/2020_REL/NALCMS');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USGS_NLCD_RELEASES_2020_REL_NALCMS
- 数据引用：North American Land Change Monitoring System download webpage.
[www.cec.org/north-american-land-change-monitoring-system](
  http://www.cec.org/north-american-land-change-monitoring-system/)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
