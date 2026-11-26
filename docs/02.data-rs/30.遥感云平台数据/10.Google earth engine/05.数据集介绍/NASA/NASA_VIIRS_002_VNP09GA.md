---
title: "VNP09GA：VIIRS 地表反射率逐日 500 米与 1 千米"
date: 2026-11-03 12:00:00
permalink: /pages/f3f78834/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "daily"
  - "nasa"
  - "noaa"
  - "npp"
  - "reflectance"
  - "satellite-imagery"
  - "sr"
  - "viirs"
  - "vnp09ga"
---

# VNP09GA：VIIRS 地表反射率逐日 500 米与 1 千米

英文原名：VNP09GA: VIIRS Surface Reflectance Daily 500m and 1km

## 这是什么数据

可见光红外成像辐射计套件（VIIRS）逐日地表反射率（VNP09GA）产品提供来自 Suomi 国家极轨伙伴（S-NPP）VIIRS 传感器的陆地地表反射率估计。数据为三个影像波段（I1、I2、I3），标称 500 米分辨率（约 463 米），以及九个中等分辨率波段（M1、M2、M3、M4、M5、M7、M8、M10、M11），标称 1 千米（约 926 米）分辨率。500 米与 1 千米数据集分别通过重采样二级输入产品中原生 375 米与 750 米 VIIRS 分辨率导出。这些波段经大气条件校正，提供地表光谱反射率的估计，如同在地面测量的那样。

数据在每天 16 次可能的过境上进行时间聚合。当每天有多个观测时，只包括质量最高的观测中的第一个。

波段比例因子已应用。

更多信息，访问 VIIRS [土地产品质量评估网站](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2012 年至 2026 年；分辨率：500 米与 1 千米。
- 时间范围：2012-01-19 至 2026-10-28

## 分辨率与规格

- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| M1 | 1 千米地表反射率波段 M1。 | 1000 | 0.402 - 0.422&micro;m |
| M2 | 1 千米地表反射率波段 M2。 | 1000 | 0.436 - 0.454&micro;m |
| M3 | 1 千米地表反射率波段 M3。 | 1000 | 0.478 - 0.488&micro;m |
| M4 | 1 千米地表反射率波段 M4。 | 1000 | 0.545 - 0.565&micro;m |
| M5 | 1 千米地表反射率波段 M5。 | 1000 | 0.662 - 0.682&micro;m |
| M7 | 1 千米地表反射率波段 M7。 | 1000 | 0.846 - 0.885&micro;m |
| M8 | 1 千米地表反射率波段 M8。 | 1000 | 1.230 - 1.250&micro;m |
| M10 | 1 千米地表反射率波段 M10。 | 1000 | 1.580 - 1.640&micro;m |
| M11 | 1 千米地表反射率波段 M11。 | 1000 | 2.230 - 2.280&micro;m |
| I1 | 500 米地表反射率波段 I1。 | 500 | 0.600 - 0.680&micro;m |
| I2 | 500 米地表反射率波段 I2。 | 500 | 0.850 - 0.880&micro;m |
| I3 | 500 米地表反射率波段 I3。 | 500 | 1.580 - 1.640&micro;m |
| SensorAzimuth | 传感器方位角。 | 1000 |  |
| SensorZenith | 传感器天顶角。 | 1000 |  |
| SolarAzimuth | 太阳方位角。 | 1000 |  |
| SolarZenith | 太阳天顶角。 | 1000 |  |
| iobs_res | 观测编号。 | 500 |  |
| num_observations_1km | 1 千米观测数。 | 1000 |  |
| num_observations_500m | 500 米观测数。 | 500 |  |
| obscov_1km | 观测覆盖 1km。 | 1000 |  |
| obscov_500m | 观测覆盖 500km。 | 500 |  |
| orbit_pnt | 轨道指针。 | 1000 |  |
| QF1 | 质量标志 1。 | 1000 |  |
| QF2 | 质量标志 2。 | 1000 |  |
| QF3 | 质量标志 3。 | 1000 |  |
| QF4 | 质量标志 4。 | 1000 |  |
| QF5 | 质量标志 5。 | 1000 |  |
| QF6 | 质量标志 6。 | 1000 |  |
| QF7 | 质量标志 7。 | 1000 |  |
| land_water_mask | 陆地/水体掩膜。 | 1000 |  |

## 能拿来做什么

- 地表反射率监测
- 植被与土地覆盖研究
- VIIRS 数据应用

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/VIIRS/002/VNP09GA');
```

- 数据集编号（Earth Engine ID）：`NASA/VIIRS/002/VNP09GA`
- 提供方：NASA Land SIPS、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_VIIRS_002_VNP09GA
* [User's Guide] (https://lpdaac.usgs.gov/documents/1657/VNP09_User_Guide_V2.pdf)
* [Algorithm Theoretical Basis Document (ATBD)] (https://lpdaac.usgs.gov/documents/122/VNP09_ATBD.pdf)

## 许可与引用

- 许可：proprietary
- 关键词：daily, nasa, noaa, npp, reflectance, satellite-imagery, sr, viirs, vnp09ga
- 数据引用：Vermote, E., Franch, B., Claverie, M. (2023). VIIRS/NPP Surface Reflectance Daily L2G Global 1km and 500m SIN Grid V002 [Data set]. NASA EOSDIS Land Processes Distributed Active Archive Center.

- DOI：10.5067/VIIRS/VNP09GA.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [VNP09H1: VIIRS Surface Reflectance 8-Day L3 Global 500m](/pages/862913cc/)
- [VNP43IA3: BRDF/Albedo Daily L3 Global 500m SIN Grid](/pages/217dd9b2/)
- [VNP43IA4: BRDF/Albedo Quality Daily L3 Global 500m SIN Grid](/pages/00b89222/)
- [VNP43MA3: BRDF/Albedo Daily L3 Global 1km SIN Grid](/pages/86f9040c/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
