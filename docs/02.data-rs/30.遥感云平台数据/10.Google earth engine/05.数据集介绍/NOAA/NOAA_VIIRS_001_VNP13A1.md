---
title: "VNP13A1.001：VIIRS 植被指数 16 天 500 米 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/e2cab212/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "16-day"
  - "evi"
  - "nasa"
  - "ndvi"
  - "noaa"
  - "npp"
  - "vegetation"
  - "vegetation-indices"
  - "viirs"
  - "vnp13a1"
---

# VNP13A1.001：VIIRS 植被指数 16 天 500 米 [已弃用]

英文原名：VNP13A1.001: VIIRS Vegetation Indices 16-Day 500m [deprecated]

## 这是什么数据

Suomi 国家极轨伙伴（S-NPP）NASA 可见红外成像辐射计套件（VIIRS）植被指数（VNP13A1）数据产品，在 16 天获取期内选取最佳可用像元，以 500 米分辨率提供植被指数。VNP13 数据产品的设计参照中分辨率成像光谱仪（MODIS）Terra 与 Aqua 植被指数产品套件，以促进地球观测系统（EOS）任务的连续性。

VNP13 算法生成三个植被指数：（1）归一化植被指数（NDVI），（2）增强植被指数（EVI），（3）增强植被指数 2（EVI2）。（1）NDVI 是持续时间最长的遥感时间序列观测之一，使用红光与近红外（NIR）波段。（2）EVI 是略有不同的植被指数，对冠层覆盖更敏感，而 NDVI 对叶绿素更敏感。（3）EVI2 是标准 3 波段 EVI 的改型，使用红光与 NIR 波段。该改型解决了 VIIRS EVI 与其他不含蓝光波段的 EVI 模型比较时出现的问题。EVI2 最终将成为标准 EVI。

除三个植被指数层外，本产品还包括近红外（NIR）反射率层；三个短波红外（SWIR）反射率层——红、蓝、绿反射率；合成年积日；像元可靠性；观测与太阳角度，以及质量层。

更多信息见 VIIRS [陆地产品质量评估网站](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP) 与 [用户指南](https://lpdaac.usgs.gov/documents/1372/VNP13_User_Guide_ATBD_V2.1.2.pdf)。

## 覆盖范围与时间

- 覆盖范围：空间：全球陆地；时间：2012 年至 2024 年（16 天合成）；分辨率：500 米。
- 时间范围：2012-01-17 至 2024-05-24

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| EVI | 3 波段增强植被指数 | 500 |  |
| EVI2 | 2 波段增强植被指数 | 500 |  |
| NDVI | 归一化植被指数 | 500 |  |
| NIR_reflectance | 近红外辐射反射率 | 500 | 846-885nm |
| SWIR1_reflectance | 短波红外辐射反射率 | 500 | 1230-1250nm |
| SWIR2_reflectance | 短波红外辐射反射率 | 500 | 1580-1640nm |
| SWIR3_reflectance | 短波红外辐射反射率 | 500 | 2225-2275nm |
| VI_Quality | 质量评估（QA）位字段。 | 500 |  |
| red_reflectance | 红光波段反射率 | 500 | 600-680nm |
| green_reflectance | 绿光波段反射率 | 500 | 545-656nm |
| blue_reflectance | 蓝光波段反射率 | 500 | 478-498nm |
| composite_day_of_the_year | 儒略年积日 | 500 |  |
| pixel_reliability | 用简单等级分类的像元可用性 | 500 |  |
| relative_azimuth_angle | 每个像元的相对方位角 | 500 |  |
| sun_zenith_angle | 每个像元的太阳天顶角 | 500 |  |
| view_zenith_angle | 每个像元的观测天顶角 | 500 |  |

## 能拿来做什么

- 在 Google Earth Engine 中调用该数据集，叠加行政区划、土地覆盖等图层做空间分析。
- 做长时间序列分析，提取区域统计值并导出图表与 GeoTIFF。
- 作为教学与科研示例数据，演示 Earth Engine 影像集合的筛选、合成与可视化流程。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/001/VNP13A1');
```

- 数据集编号（Earth Engine ID）：`NOAA/VIIRS/001/VNP13A1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_001_VNP13A1
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/VIIRS/1/VNP13A1)

## 许可与引用

- 许可：proprietary
- 关键词：16-day, evi, nasa, ndvi, noaa, npp, vegetation, vegetation-indices, viirs, vnp13a1
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/VIIRS/VNP13A1.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [VNP15A2H：叶面积指数/光合有效辐射分量 8 天 L4 全球 500 米 SIN 网格 [已弃用]](/pages/abb03285/)
- [VNP22Q2：地表物候逐年 L3 全球 500 米 SIN 网格 [已弃用]](/pages/985a7db1/)
- [AG100：ASTER 全球发射率数据集 100 米 V003](/pages/3510f165/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
