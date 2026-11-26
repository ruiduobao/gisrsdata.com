---
title: "HLSL30：HLS-2 Landsat 地表反射率与 TOA 亮度全球 30 米"
date: 2026-11-03 12:00:00
permalink: /pages/7a357ddf/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "landsat"
  - "nasa"
  - "satellite-imagery"
  - "sentinel"
  - "usgs"
---

# HLSL30：HLS-2 Landsat 地表反射率与 TOA 亮度全球 30 米

英文原名：HLSL30: HLS-2 Landsat Operational Land Imager Surface Reflectance and TOA Brightness Daily Global 30m

## 这是什么数据

协调 Landsat Sentinel-2（HLS）项目提供来自虚拟卫星传感器星座的一致地表反射率（SR）与大气顶（TOA）亮度数据。陆地作业成像仪（OLI）搭载于 NASA/USGS 联合的 Landsat 8 与 Landsat 9 卫星，多光谱成像仪（MSI）搭载于欧洲哥白尼 Sentinel-2A 与 Sentinel-2B 卫星。组合测量能以 30 米空间分辨率每 2 至 3 天观测全球陆地。HLS 项目使用一组算法从 OLI 与 MSI 获得无缝产品，包括大气校正、云与云影掩膜、空间配准与公共格网化、照明与视角归一化以及光谱波段调整。

HLS 项目以两个独立产品分发数据：HLSL30（Landsat 8/9）与 HLSS30（Sentinel-2 A/B）。两者都提供 30 米天底双向反射分布函数（BRDF）调整反射率（NBAR）。

* [通用文档](https://lpdaac.usgs.gov/products/hlsl30v002/)
* S30 目录链接：[NASA/HLS/HLSS30/v002](NASA_HLS_HLSS30_v002)

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2013 年至 2026 年；分辨率：30 米。
- 时间范围：2013-04-11 至 2026-10-31

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B1 | 海岸气溶胶。 | 30 |  |
| B2 | 蓝光。 | 30 |  |
| B3 | 绿光。 | 30 |  |
| B4 | 红光。 | 30 |  |
| B5 | 近红外。 | 30 |  |
| B6 | 短波红外 1。 | 30 |  |
| B7 | 短波红外 2。 | 30 |  |
| B9 | 卷云。 | 30 |  |
| B10 | 热红外 1。 | 30 |  |
| B11 | 热红外 2。 | 30 |  |
| Fmask | 质量位。 | 30 |  |
| SZA | 太阳天顶角。 | 30 |  |
| SAA | 太阳方位角。 | 30 |  |
| VZA | 观测天顶角。 | 30 |  |
| VAA | 观测方位角。 | 30 |  |

## 能拿来做什么

- 地表反射率与植被监测
- 土地利用与覆盖变化
- Landsat 与 Sentinel-2 联合分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/HLS/HLSL30/v002');
```

- 数据集编号（Earth Engine ID）：`NASA/HLS/HLSL30/v002`
- 提供方：NASA LP DAAC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_HLS_HLSL30_v002
* [User's Guide](https://lpdaac.usgs.gov/documents/1698/HLS_User_Guide_V2.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/769/HLS_ATBD_V15_provisional.pdf)

## 许可与引用

- 许可：proprietary
- 关键词：landsat, nasa, satellite-imagery, sentinel, usgs
- 数据引用：Masek, J., Ju, J., Roger, J., Skakun, S., Vermote, E., Claverie, M., Dungan,
J., Yin, Z., Freitag, B., Justice, C. (2021). HLS Operational Land Imager
Surface Reflectance and TOA Brightness Daily Global 30m v2.0 [Data set].
NASA EOSDIS Land Processes Distributed Active Archive Center.
Accessed 2023-09-12 from https://doi.org/10.5067/HLS/HLSL30.002


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [HLSS30: HLS Sentinel-2 Multi-spectral Instrument Surface Reflectance Daily Global 30m](/pages/5c17c33d/)
- [ALOS AVNIR-2 正射影像（ORI）](/pages/d4abf354/)
- [ALOS-2 PALSAR-2 条带模式 2.1 级产品（2024 年 1 月能登地震应急观测）](/pages/b836b19e/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
