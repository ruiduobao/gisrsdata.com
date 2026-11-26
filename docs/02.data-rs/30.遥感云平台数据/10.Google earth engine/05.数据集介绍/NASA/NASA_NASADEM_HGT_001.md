---
title: "NASADEM：NASA 30 米数字高程模型"
date: 2026-11-03 12:00:00
permalink: /pages/f9ac1729/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "geophysical"
  - "nasa"
  - "nasadem"
  - "srtm"
  - "topography"
  - "usgs"
---

# NASADEM：NASA 30 米数字高程模型

英文原名：NASADEM: NASA 30m Digital Elevation Model

## 这是什么数据

NASADEM 是对 SRTM 数据的再处理，通过纳入来自 ASTER GDEM、ICESat GLAS 与 PRISM 数据集的辅助数据提高了精度。

最显著的处理改进包括通过改进相位解缠减少空洞，并使用 ICESat GLAS 数据进行控制。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年 2 月 11 日至 22 日；分辨率：30 米。
- 时间范围：2000-02-11 至 2000-02-22

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elevation | 合并无空洞 DEM 文件中的整数高度相对于 EGM96 大地水准面（而 SRTM-only DEM 文件中的浮点高度相对于 WGS84 椭球）。 | 30 |  |
| num | 指示数据源与源景数的索引。* 0：校正 SRTM 水体数据中的水 * 1–23：SRTM 1–23（已知最大 23）* 41–94：PRISM 1–50（极区最大 54、其他地区 37）* 110–160：GDEM3（在 50 饱和）* 170–220：GDEM2（在 50 饱和）* 231：来自 GDEM3 的 SRTMv3 * 232：来自 GDEM3 的 SRTMv2 * 233：来自 GDEM2 的 SRTMv2 * 234：来自 GDEM2 的 SRTM-with-NGA-fill * 241：来自 GDEM2 的 NED（美国）* 242：来自 GDEM3 的 NED（美国）* 243：来自 GDEM2 的 CDED（加拿大）* 244：来自 GDEM3 的 CDED（加拿大）* 245：来自 GDEM2 的 Alaska（阿拉斯加）* 246：来自 GDEM3 的 Alaska（阿拉斯加）* 250：插值 * 251：两个相邻图幅不一致处（通常是 GDEM 错误）的图幅边缘平均 * 255：错误（若 NUM 缺失——已知不存在） | 30 |  |
| swb | 更新的 SRTM 水体数据 * 0：陆地 * 255：水。 | 30 |  |

## 能拿来做什么

- 地形分析与地貌研究
- 水文建模
- 高程数据应用

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('NASA/NASADEM_HGT/001');
```

- 数据集编号（Earth Engine ID）：`NASA/NASADEM_HGT/001`
- 提供方：NASA / USGS / JPL-Caltech、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_NASADEM_HGT_001
* [User's Guide](https://lpdaac.usgs.gov/documents/592/NASADEM_User_Guide_V1.pdf)

## 许可与引用

- 许可：proprietary
- 关键词：dem, elevation, elevation-topography, geophysical, nasa, nasadem, srtm, topography, usgs
- 数据引用：NASA JPL (2020). NASADEM Merged DEM Global 1 arc second V001 [Data set]. NASA EOSDIS Land
Processes DAAC. Accessed 2020-12-30 from [doi:10.5067/MEaSUREs/NASADEM/NASADEM_HGT.001](https://doi.org/10.5067/MEaSUREs/NASADEM/NASADEM_HGT.001)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ALOS 全球 30 米 DSM v4.1](/pages/774620fb/)
- [ASTER传感器(TERRA)](/pages/da7fa1/)
- [CryoSat-2 南极 1 公里高程模型](/pages/a0390601/)
- [GHSL：全球建筑体积 1975–2030（P2023A）](/pages/a37f30e2/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
