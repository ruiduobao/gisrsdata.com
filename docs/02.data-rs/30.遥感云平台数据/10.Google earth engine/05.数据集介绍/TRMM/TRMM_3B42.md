---
title: "TRMM 3B42：3 小时降水估算"
date: 2026-11-03 12:00:00
permalink: /pages/cd7d24df/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "3-hourly"
  - "climate"
  - "geophysical"
  - "jaxa"
  - "nasa"
  - "precipitation"
  - "rainfall"
  - "trmm"
  - "weather"
---

# TRMM 3B42：3 小时降水估算

英文原名：TRMM 3B42: 3-Hourly Precipitation Estimates

## 这是什么数据

热带降雨测量任务（TRMM）是 NASA 与日本宇宙航空研究开发机构（JAXA）的联合任务，旨在监测与研究热带降雨。34B2 产品（原文如此，实为 3B42）包含格网化的、经 TRMM 调整的合并红外降水（毫米/小时）与 RMS 降水误差估算，时间分辨率 3 小时，空间分辨率 0.25 度。

详情见 [算法说明](https://trmm.gsfc.nasa.gov/3b42.html) 与 [文件规格](https://storm.pps.eosdis.nasa.gov/storm/data/docs/filespec.TRMM.V7.3B42.pdf)。

## 覆盖范围与时间

- 覆盖范围：空间：全球（热带与中纬度）；时间：1998 年至 2019 年（3 小时）；分辨率：27,830 米（0.25 度）。
- 时间范围：1998-01-01 至 2019-12-31

## 分辨率与规格

- 空间分辨率：约 27,830 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| precipitation | 合并微波/红外降水估算 | 27830 |  |
| relativeError | 合并微波/红外降水随机误差估算 | 27830 |  |
| satPrecipitationSource | 标明数据来源的标志 | 27830 |  |
| HQprecipitation | 雨量计调整前的微波降水估算 | 27830 |  |
| IRprecipitation | 雨量计调整前的红外降水估算 | 27830 |  |
| satObservationTime | 卫星观测时间减去颗粒时间。若卫星观测重叠，两个或多个观测时间做等权平均。 | 27830 |  |

## 能拿来做什么

- 做热带降水日变化与极端降水分析。
- 为水文模型提供 3 小时降水强迫。
- 与 IMERG 等后续产品做衔接对比。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('TRMM/3B42');
```

- 数据集编号（Earth Engine ID）：`TRMM/3B42`
- 提供方：NASA GES DISC at NASA Goddard Space Flight Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TRMM_3B42
* [PI Documentation](https://docserver.gesdisc.eosdis.nasa.gov/public/project/GPM/3B42_3B43_doc_V7.pdf)
* [File Specification for TRMM Products](https://pps.gsfc.nasa.gov/Documents/filespec.TRMM.V7.pdf)
* [Comparison between TRMM versions 6 and 7](https://pps.gsfc.nasa.gov/Documents/formatChangesV7.pdf)
* [Readme](https://disc2.gesdisc.eosdis.nasa.gov/data/TRMM_L3/TRMM_3B42/doc/README.TRMM_V7.pdf)
* [Details of the TMPA algorithm used in this product](https://pmm.nasa.gov/sites/default/files/imce/3B42_3B43_TMPA_restart.pdf)
* [TRMM Data Gaps](https://web.archive.org/web/20200701000000*/ftp://gpmweb2.pps.eosdis.nasa.gov/tsdis/AB/docs/anomalous.html)
* [Transition from TMPA to IMERG](https://docserver.gesdisc.eosdis.nasa.gov/public/project/GPM/TMPA-to-IMERG_transition.pdf)

## 许可与引用

- 许可：proprietary
- 关键词：3-hourly, climate, geophysical, jaxa, nasa, precipitation, rainfall, trmm, weather
- 数据引用：Adler, R.F., G.J. Huffman, A. Chang, R. Ferraro, P. Xie, J. Janowiak,
B. Rudolf, U. Schneider, S. Curtis, D. Bolvin, A. Gruber, J. Susskind,
P. Arkin, E.J. Nelkin, 2003: The Version 2 Global Precipitation
Climatology Project (GPCP) Monthly Precipitation Analysis (1979-Present).
J. Hydrometeor., 4(6), 1147-1167.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CPC 全球统一温度](/pages/8042cb38/)
- [CPC 全球统一雨量计逐日降水分析](/pages/9d6b70e8/)
- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)
- [ERA5 逐日聚合数据](/pages/9ae9975a/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
