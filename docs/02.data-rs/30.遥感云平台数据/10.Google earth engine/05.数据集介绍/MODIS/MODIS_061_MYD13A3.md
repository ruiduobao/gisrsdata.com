---
title: "MYD13A3.061 Aqua 植被指数月 L3 全球 1 公里 SIN 格网"
date: 2026-11-03 12:00:00
permalink: /pages/ea60f587/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aqua"
  - "evi"
  - "global"
  - "modis"
  - "monthly"
  - "nasa"
  - "ndvi"
  - "usgs"
  - "vegetation"
  - "vegetation-indices"
---

# MYD13A3.061 Aqua 植被指数月 L3 全球 1 公里 SIN 格网

英文原名：MYD13A3.061 Aqua Vegetation Indices Monthly L3 Global 1 km SIN Grid

## 这是什么数据

Aqua 中分辨率成像光谱仪（MODIS）植被指数（MYD13A3）版本 6.1 数据以 1 公里（km）空间分辨率按月提供，为正弦投影的格网三级产品。在生成此月产品时，算法摄入所有与该月重叠的 MYD13A2 产品并采用加权时间平均。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2026 年；分辨率：1 公里。
- 时间范围：2002-07-01 至 2026-09-01

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| NDVI | 月 NDVI 平均值。 | 1000 |  |
| EVI | 月 EVI 平均值。 | 1000 |  |
| DetailedQA | VI 质量指示。 | 1000 |  |
| sur_refl_b01 | 地表反射率波段 1（红）。 | 1000 | 620-670nm |
| sur_refl_b02 | 地表反射率波段 2（近红外）。 | 1000 | 841-876nm |
| sur_refl_b03 | 地表反射率波段 3（蓝）。 | 1000 | 459-479nm |
| sur_refl_b07 | 地表反射率波段 7（中红外）。 | 1000 | 2105-2155nm |
| ViewZenith | VI 像元的观测天顶角。 | 1000 |  |
| SolarZenith | VI 像元的太阳天顶角。 | 1000 |  |
| RelativeAzimuth | VI 像元的相对方位角。 | 1000 |  |
| SummaryQA | VI 像元的质量可靠性。 | 1000 |  |

## 能拿来做什么

- 土地覆盖与植被监测
- 全球变化研究
- 遥感算法验证

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/061/MYD13A3');
```

- 数据集编号（Earth Engine ID）：`MODIS/061/MYD13A3`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MYD13A3
* [User's Guide](https://lpdaac.usgs.gov/documents/621/MOD13_User_Guide_V61.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/104/MOD13_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MYD13A3)

## 许可与引用

- 许可：proprietary
- 关键词：aqua, evi, global, modis, monthly, nasa, ndvi, usgs, vegetation, vegetation-indices
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD13A3.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD15A3H.061 MODIS 叶面积指数/FPAR 4 天全球 500 米](/pages/4b457845/)
- [MOD13A1.061 Terra Vegetation Indices 16-Day Global 500m](/pages/d6ab7a99/)
- [MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km](/pages/d5e48b42/)
- [MOD13A3.061 Vegetation Indices Monthly L3 Global 1 km SIN Grid](/pages/9a6615e4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
