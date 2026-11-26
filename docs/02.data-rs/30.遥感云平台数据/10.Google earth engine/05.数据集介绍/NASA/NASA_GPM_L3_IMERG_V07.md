---
title: "GPM：全球降水测量（GPM）版本 07"
date: 2026-11-03 12:00:00
permalink: /pages/3e858db5/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "geophysical"
  - "gpm"
  - "half-hourly"
  - "imerg"
  - "jaxa"
  - "nasa"
  - "precipitation"
  - "weather"
---

# GPM：全球降水测量（GPM）版本 07

英文原名：GPM: Global Precipitation Measurement (GPM) Release 07

## 这是什么数据

全球降水测量（GPM）是一个国际卫星任务，每三小时提供全球雨雪的下一代观测。GPM 综合多卫星反演（IMERG）是统一算法，结合 GPM 星座中所有被动微波仪器的数据提供降雨估计。

该算法旨在对所有卫星微波降水估计进行相互校准、合并与插值，连同微波校准的红外（IR）卫星估计、降水雨量计分析以及潜在的其他降水估计器，在精细的时间与空间尺度上覆盖 TRMM 与 GPM 时代的整个全球。该系统对每个观测时间运行多次，先给出快速估计，随着更多数据到达相继提供更好的估计。最后一步使用月度雨量计数据创建研究级产品。有关算法的更多细节，见 [IMERG 技术文档](https://pmm.nasa.gov/sites/default/files/document_files/IMERG_doc.pdf)。

本集合包含临时产品，当数据可用时定期被更新版本替换。产品以名为「status」的元数据属性标记。当产品最初可用时，属性值为「provisional」。一旦临时产品被最终版本更新，此值更新为「permanent」。（注：由于提供方计划过渡到版本 8，2025/09/30 之后没有「permanent」产品可用；细节见[此处](https://gpm.nasa.gov/data/news/imerg-v08-transition-schedule)。）

本集合包含来自以下产品的数据：

* GPM_3IMERGHH_V07 [doi:10.5067/GPM/IMERG/3B-HH-L/07](https://doi.org/10.5067/GPM/IMERG/3B-HH-L/07) * GPM_3IMERGHH_07 [doi:10.5067/GPM/IMERG/3B-HH/07](https://doi.org/10.5067/GPM/IMERG/3B-HH/07)

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1998 年至 2026 年；分辨率：11,132 米。
- 时间范围：1998-01-01 至 2026-11-02

## 分辨率与规格

- 空间分辨率：约 11,132 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| MWobservationTime | PMW 来源时间。 | 11132 |  |
| MWprecipSource | PMW 来源传感器标识。 | 11132 |  |
| MWprecipitation | 合并 PMW 降水。 | 11132 |  |
| IRinfluence | IR 的卡尔曼滤波权重。 | 11132 |  |
| IRprecipitation | IR 降水。 | 11132 |  |
| precipitation | 快照降水 - 已校准。 | 11132 |  |
| precipitationUncal | 快照降水 - 未校准。 | 11132 |  |
| probabilityLiquidPrecipitation | 液态降水相态概率。 | 11132 |  |
| randomError | 校准降水的随机误差。 | 11132 |  |

## 能拿来做什么

- 降水监测与水文模拟
- 气候研究
- 洪水与干旱评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/GPM_L3/IMERG_V07');
```

- 数据集编号（Earth Engine ID）：`NASA/GPM_L3/IMERG_V07`
- 提供方：NASA GES DISC at NASA Goddard Space Flight Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GPM_L3_IMERG_V07
* [Algorithm Theoretical Basis Document](https://arthurhou.pps.eosdis.nasa.gov/Documents/IMERG_V07_ATBD_final.pdf)
* [IMERG Quality Index](https://docserver.gesdisc.eosdis.nasa.gov/public/project/GPM/IMERGV06_QI.pdf)
* [Caveats for IMERG extension into TRMM era](https://docserver.gesdisc.eosdis.nasa.gov/public/project/GPM/IMERGV06_TRMMera-caveats.pdf)
* [IMERG Technical Documentation](https://arthurhou.pps.eosdis.nasa.gov/Documents/IMERG_TechnicalDocumentation_final.pdf)
* [Release notes; New Morphing algorithm](https://gpm.nasa.gov/resources/documents/imerg-v07-release-notes)
* [Remote-Sensing Reflectance](https://gpm1.gesdisc.eosdis.nasa.gov/data/GPM_L3/doc/README.GPM.pdf)
* [Anomalies](https://gpmweb2https.pps.eosdis.nasa.gov/tsdis/AB/docs/gpm_anomalous.html)

## 许可与引用

- 许可：proprietary
- 关键词：climate, geophysical, gpm, half-hourly, imerg, jaxa, nasa, precipitation, weather
- 数据引用：Huffman, G.J., E.F. Stocker, D.T. Bolvin, E.J. Nelkin, Jackson Tan (2019),
GPM IMERG Final Precipitation L3 Half Hourly 0.1 degree x 0.1 degree V06,
Greenbelt, MD, Goddard Earth Sciences Data and Information Services Center
(GES DISC), Accessed: [Data Access Date],
[doi:10.5067/GPM/IMERG/3B-HH/07](https://doi.org/10.5067/GPM/IMERG/3B-HH/07)

- DOI：10.5067/GPM/IMERG/3B-HH-L/07

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GPM: Monthly Global Precipitation Measurement (GPM) v6](/pages/0308328b/)
- [GPM: Monthly Global Precipitation Measurement (GPM) vRelease 07](/pages/29f02f85/)
- [GPM: Global Precipitation Measurement (GPM) Release 06 [deprecated]](/pages/427935f4/)
- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
