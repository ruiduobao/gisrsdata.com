---
title: "VNP14IMGTDL_NRT 每日栅格：VIIRS（S-NPP）375 米活火"
date: 2026-11-03 12:00:00
permalink: /pages/7cb75763/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "eosdis"
  - "fire"
  - "firms"
  - "geophysical"
  - "hotspot"
  - "lance"
  - "modis"
  - "nasa"
  - "thermal"
  - "viirs"
---

# VNP14IMGTDL_NRT 每日栅格：VIIRS（S-NPP）375 米活火

英文原名：VNP14IMGTDL_NRT Daily Raster: VIIRS (S-NPP) Band 375m Active Fire

## 这是什么数据

Suomi NPP 可见光红外成像辐射计套件（VIIRS）活火探测产品基于该仪器 375 米标称分辨率数据。与其他较粗分辨率（≥1 千米）卫星火探测产品相比，改进的 375 米数据对相对小面积的火有更大的响应，并改进了大火周界的制图。因此，数据非常适合支持火灾管理（如近实时警报系统），以及其他需要改进火制图保真度的科学应用。

近实时数据集中的数据不被视为科学质量。

更多信息见[此处](https://earthdata.nasa.gov/earth-observation-data/near-real-time/firms)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2023 年至 2026 年；分辨率：375 米。
- 时间范围：2023-09-03 至 2026-11-02

## 分辨率与规格

- 空间分辨率：约 375 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Bright_ti4 | 火像元的 VIIRS I-4 通道亮温。 | 375 |  |
| Bright_ti5 | 火像元的 VIIRS I-5 通道亮温。 | 375 |  |
| confidence | 一种探测置信度，旨在帮助用户评估单个活火像元的质量。火掩膜内所有火像元的置信度估计在「low」（0）、「nominal」（1）与「high」（2）之间。低置信度白天火像元通常与太阳耀光区域以及中红外通道 I4 中相对温度异常较低（<15 K）相关。标称置信度像元是白天无潜在太阳耀光污染、且白天或夜间数据中温度异常强（>15 K）的像元。高置信度火像元与白天或夜间饱和像元相关。请注意：低置信度夜间像元仅出现在从 11° E 到 110° W、7° N 到 55° S 的地理区域。该区域描述南大西洋磁异常的影响范围，它可能在中红外通道 I4 中引起虚假亮温，导致潜在的误报。这些已从 FIRMS 分发的 NRT 数据中移除。 | 375 |  |
| line_number | 像元来源的 FIRMS CSV 文件中的行号。 | 375 |  |
| frp | FRP 表示以兆瓦（MW）为单位的像元综合火辐射功率。鉴于其独特的空间与光谱分辨率，VIIRS 375 米火探测算法经过定制与调优，以优化对小火的响应，同时平衡误报的发生。驱动活火探测的中红外 I4 通道（3.55–3.93 μm）频繁饱和，需要额外的检验与程序以避免像元分类错误。因此，亚像元火特征（如火辐射功率 [FRP] 反演）仅在小火与/或低强度火上可行。系统的 FRP 反演基于结合 375 米与 750 米数据的混合方法。 | 375 |  |
| acq_epoch | 获取时间戳（秒）。 | 375 |  |
| acq_time | 一天中自午夜起的秒数。 | 375 |  |
| DayNight | 1 = 白天火，0 = 夜间火。 | 375 |  |

## 能拿来做什么

- 近实时火灾监测与预警
- 火情管理支持
- 火灾科学研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/LANCE/SNPP_VIIRS/C2');
```

- 数据集编号（Earth Engine ID）：`NASA/LANCE/SNPP_VIIRS/C2`
- 提供方：NASA / LANCE / SNPP_VIIRS、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_LANCE_SNPP_VIIRS_C2

## 许可与引用

- 许可：proprietary
- 关键词：eosdis, fire, firms, geophysical, hotspot, lance, modis, nasa, thermal, viirs
- 数据引用：NRT VIIRS 375 m Active Fire product VNP14IMGT distributed from NASA FIRMS.
Available on-line https://earthdata.nasa.gov/firms.
[doi:10.5067/FIRMS/VIIRS/VNP14IMGT_NRT.002](https://doi.org/10.5067/FIRMS/VIIRS/VNP14IMGT_NRT.002)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [VJ114IMGTDL_NRT Daily Raster: VIIRS (NOAA-20) Band 375m Active Fire](/pages/2b77b12f/)
- [FIRMS：资源管理火灾信息系统](/pages/4ae50fa9/)
- [FireCCI51：MODIS Fire_cci 过火面积像元产品（5.1 版）](/pages/2a6e2416/)
- [GlobFire 最终火事件检测（基于 MCD64A1）](/pages/16d164e6/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
