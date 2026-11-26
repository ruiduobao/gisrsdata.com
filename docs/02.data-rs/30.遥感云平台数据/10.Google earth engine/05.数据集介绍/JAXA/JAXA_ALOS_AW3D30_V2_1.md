---
title: "ALOS 全球 30 米 DSM v2.1（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/4e1fdf4b/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "alos"
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "geophysical"
  - "jaxa"
  - "topography"
---

# ALOS 全球 30 米 DSM v2.1（已弃用）

英文原名：ALOS DSM: Global 30m v2.1 [deprecated]

## 这是什么数据

ALOS World 3D - 30m（AW3D30）是全球数字地表模型（DSM）数据集，水平分辨率约 30 米（1 弧秒格网）。该数据集基于 [World 3D Topographic Data](https://www.aw3d.jp/en/) 的 DSM 数据集（5 米格网版本）。更多细节见数据集[文档](https://www.eorc.jaxa.jp/ALOS/en/aw3d30/aw3d30v11_format_e.pdf)。

2.1 版于 2018 年 4 月发布：源 AW3D DSM 已升级至第 2 版。除南北纬 60 度之间的云、雪像元外，陆地水体与低相关像元的掩膜也使用已有 DEM 填补。在日本区域，填补在更新海岸线信息之后进行。

AW3D DSM 高程由使用光学影像立体像对的影像匹配过程计算得到。处理过程中云、雪与冰被自动识别并应用掩膜信息。但尤其在云、雪、冰区域周围（或边缘），有时会残留未匹配点，从而在最终 DSM 中造成一些高程误差。

以下是一些数据值超出有效高程范围的示例区域。不可能出现的极低负值集中在南极洲（−63.77, −61.660）、（−77.22, −150.27）、（−73.29, 168.14）附近；印度尼西亚（−5.36, 134.55）附近；巴西（−1.667113844, −50.6269684）附近；秘鲁（−10.45048137, −75.39459876）附近，近似值分别约为 −1013、−998、−635 与 −610。不可能出现的极高正值见于北极若干地点（79.83, −77.67）与（69.54, −75.42）附近；斐济（−16.58, 179.44）与（−18.96, 178.39）附近；尼泊尔（28.50, 84.56）附近，近似值分别约为 15369、15213 与 10900。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2006 年 1 月 24 日至 2011 年 5 月 12 日（源数据期）；分辨率：30 米。
- 时间范围：2006-01-24 至 2011-05-12

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| AVE_DSM | 海拔高：16 位有符号（小端）栅格数据；高程（米）由基于 ITRF97 与 GRS80 的椭球高使用 EGM96 大地水准面模型换算得到。 | 30 |  |
| AVE_STK | 用于生成 DSM 的景单元 DSM 叠加数；该波段由 5 米分辨率 DSM 的叠加数重采样至 30 米分辨率得到。 | 30 |  |
| AVE_MSK | ave 波段的 8 位掩膜。 | 30 |  |

## 能拿来做什么

- 地形分析与地貌研究
- 水文模拟与流域划分
- 正射校正与三维可视化

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('JAXA/ALOS/AW3D30/V2_1');
```

- 数据集编号（Earth Engine ID）：`JAXA/ALOS/AW3D30/V2_1`
- 提供方：JAXA Earth Observation Research Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_AW3D30_V2_1

## 许可与引用

- 许可：proprietary
- 关键词：alos, dem, elevation, elevation-topography, geophysical, jaxa, topography
- 数据引用：T. Tadono, H. Ishida, F. Oda, S. Naito, K. Minakawa, H. Iwamoto
: Precise Global DEM Generation By ALOS PRISM, ISPRS Annals of
the Photogrammetry, Remote Sensing and Spatial Information Sciences,
Vol.II-4, pp.71-76, 2014. [PDF file](https://www.isprs-ann-photogramm-remote-sens-spatial-inf-sci.net/II-4/71/2014/isprsannals-II-4-71-2014.pdf)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ALOS DSM: Global 30m  v4.1](/pages/774620fb/)
- [ALOS DSM: Global 30m  v3.2 [deprecated]](/pages/6610d57d/)
- [ALOS DSM: Global 30m v1.1 [deprecated]](/pages/8561707f/)
- [ALOS DSM: Global 30m v2.2 [deprecated]](/pages/f8b280da/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
