---
title: "VNP09GA：VIIRS 地表反射率逐日 500 米与 1 公里 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/940b557d/
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

# VNP09GA：VIIRS 地表反射率逐日 500 米与 1 公里 [已弃用]

英文原名：VNP09GA: VIIRS Surface Reflectance Daily 500m and 1km [deprecated]

## 这是什么数据

可见红外成像辐射计套件（VIIRS）逐日地表反射率（VNP09GA）产品提供 Suomi 国家极轨伙伴（S-NPP）VIIRS 传感器陆地表面反射率的估算。数据包括三个成像波段（I1、I2、I3），标称分辨率 500 米（约 463 米）；以及九个中等分辨率波段（M1、M2、M3、M4、M5、M7、M8、M10、M11），标称分辨率 1 公里（约 926 米）。500 米与 1 公里数据集分别由 L2 输入产品的原生 375 米与 750 米 VIIRS 分辨率重采样得到。这些波段经大气条件校正，给出地面实测意义上的地表光谱反射率估算。

数据按每天 16 次可能的过境做时间聚合。某天有多次观测时，只纳入第一次最高质量观测。

更多信息见 VIIRS [陆地产品质量评估网站](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP) 与 [用户指南](https://lpdaac.usgs.gov/documents/124/VNP09_User_Guide_V1.6.pdf)。

## 覆盖范围与时间

- 覆盖范围：空间：全球陆地；时间：2012 年至 2024 年（逐日）；分辨率：500 米与 1,000 米。
- 时间范围：2012-01-19 至 2024-06-16

## 分辨率与规格

- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| M1 | 1 公里地表反射率波段 M1 | 1000 | 0.402 - 0.422&micro;m |
| M2 | 1 公里地表反射率波段 M2 | 1000 | 0.436 - 0.454&micro;m |
| M3 | 1 公里地表反射率波段 M3 | 1000 | 0.478 - 0.488&micro;m |
| M4 | 1 公里地表反射率波段 M4 | 1000 | 0.545 - 0.565&micro;m |
| M5 | 1 公里地表反射率波段 M5 | 1000 | 0.662 - 0.682&micro;m |
| M7 | 1 公里地表反射率波段 M7 | 1000 | 0.846 - 0.885&micro;m |
| M8 | 1 公里地表反射率波段 M8 | 1000 | 1.230 - 1.250&micro;m |
| M10 | 1 公里地表反射率波段 M10 | 1000 | 1.580 - 1.640&micro;m |
| M11 | 1 公里地表反射率波段 M11 | 1000 | 2.230 - 2.280&micro;m |
| I1 | 500 米地表反射率波段 I1 | 500 | 0.600 - 0.680&micro;m |
| I2 | 500 米地表反射率波段 I2 | 500 | 0.850 - 0.880&micro;m |
| I3 | 500 米地表反射率波段 I3 | 500 | 1.580 - 1.640&micro;m |
| SensorAzimuth | 传感器方位角 | 1000 |  |
| SensorZenith | 传感器天顶角 | 1000 |  |
| SolarAzimuth | 太阳方位角 | 1000 |  |
| SolarZenith | 太阳天顶角 | 1000 |  |
| iobs_res | 观测编号 | 500 |  |
| num_observations_1km | 1 公里观测数 | 1000 |  |
| num_observations_500m | 500 米观测数 | 500 |  |
| obscov_1km | 观测覆盖 1 公里 | 1000 |  |
| obscov_500m | 观测覆盖 500 公里（原文如此，疑为 500 米之误） | 500 |  |
| orbit_pnt | 轨道指针 | 1000 |  |
| QF1 | 质量标志 1 | 1000 |  |
| QF2 | 质量标志 2 | 1000 |  |
| QF3 | 质量标志 3 | 1000 |  |
| QF4 | 质量标志 4 | 1000 |  |
| QF5 | 质量标志 5 | 1000 |  |
| QF6 | 质量标志 6 | 1000 |  |
| QF7 | 质量标志 7 | 1000 |  |

## 能拿来做什么

- 在 Google Earth Engine 中调用该数据集，叠加行政区划、土地覆盖等图层做空间分析。
- 做长时间序列分析，提取区域统计值并导出图表与 GeoTIFF。
- 作为教学与科研示例数据，演示 Earth Engine 影像集合的筛选、合成与可视化流程。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/001/VNP09GA');
```

- 数据集编号（Earth Engine ID）：`NOAA/VIIRS/001/VNP09GA`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_001_VNP09GA
* [User's Guide] (https://lpdaac.usgs.gov/documents/124/VNP09_User_Guide_V1.6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)] (https://lpdaac.usgs.gov/documents/122/VNP09_ATBD.pdf)

## 许可与引用

- 许可：proprietary
- 关键词：daily, nasa, noaa, npp, reflectance, satellite-imagery, sr, viirs, vnp09ga
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
- DOI：10.5067/VIIRS/VNP09GA.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [VNP43IA1：BRDF/反照率模型参数逐日 L3 全球 500 米 SIN 网格](/pages/3e009701/)
- [VNP43IA2：BRDF/反照率质量逐日 L3 全球 500 米 SIN 网格](/pages/81521072/)
- [VNP09H1：VIIRS 地表反射率 8 天 L3 全球 500 米 [已弃用]](/pages/59f40ab0/)
- [ALOS AVNIR-2 正射影像（ORI）](/pages/d4abf354/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
