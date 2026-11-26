---
title: "VNP21A1D.001：白天地表温度与发射率逐日 1 公里 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/a63db064/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "daily"
  - "day"
  - "land"
  - "nasa"
  - "noaa"
  - "surface"
  - "temperature"
  - "viirs"
  - "weather-and-climate"
---

# VNP21A1D.001：白天地表温度与发射率逐日 1 公里 [已弃用]

英文原名：VNP21A1D.001: Day Land Surface Temperature and Emissivity Daily 1km [deprecated]

## 这是什么数据

NASA Suomi 国家极轨伙伴（Suomi NPP）可见红外成像辐射计套件（VIIRS）地表温度与发射率（LST&E）白天第 1 版产品（VNP21A1D）由白天 2 级格网（L2G）中间产品逐日合成。

L2G 处理把逐日 VNP21 条带颗粒映射到正弦 MODIS 网格，存储某天内与格网像元重叠的所有观测。VNP21A1 算法逐像元筛选这些观测，最终 LST 值取自 LST 精度良好的所有无云观测的平均。只有观测覆盖超过一定阈值（15%）的观测才纳入平均。

## 覆盖范围与时间

- 覆盖范围：空间：全球陆地；时间：2012 年至 2024 年（逐日）；分辨率：1,000 米。
- 时间范围：2012-01-19 至 2024-05-01

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| LST_1KM | 逐日 1 公里地表温度。 | 1000 |  |
| QC | LST 与发射率的逐日质量控制 | 1000 |  |
| Emis_14 | 逐日 M14 发射率 | 1000 |  |
| Emis_15 | 逐日 M15 发射率 | 1000 |  |
| Emis_16 | 逐日 M16 发射率 | 1000 |  |
| View_Angle | LST 观测天顶角 | 1000 |  |
| View_Time | LST 观测时间 | 1000 |  |

## 能拿来做什么

- 在 Google Earth Engine 中调用该数据集，叠加行政区划、土地覆盖等图层做空间分析。
- 做长时间序列分析，提取区域统计值并导出图表与 GeoTIFF。
- 作为教学与科研示例数据，演示 Earth Engine 影像集合的筛选、合成与可视化流程。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/001/VNP21A1D');
```

- 数据集编号（Earth Engine ID）：`NOAA/VIIRS/001/VNP21A1D`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_001_VNP21A1D
* [User's Guide](https://lpdaac.usgs.gov/documents/429/VNP21_User_Guide_V1.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/1332/VNP21_ATBD_V1.pdf)
* [General Documentation](https://lpdaac.usgs.gov/products/vnp21a1dv001/)
* [Land Product Quality Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## 许可与引用

- 许可：proprietary
- 关键词：daily, day, land, nasa, noaa, surface, temperature, viirs, weather-and-climate
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/VIIRS/VNP21A1D.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [VNP21A1N.001：夜间地表温度与发射率逐日 1 公里 [已弃用]](/pages/2edb8761/)
- [CPC 全球统一温度](/pages/8042cb38/)
- [CPC 全球统一雨量计逐日降水分析](/pages/9d6b70e8/)
- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
