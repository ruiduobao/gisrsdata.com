---
title: "GEDI L2B 栅格冠层覆盖垂直剖面指标（版本 2）"
date: 2026-11-03 12:00:00
permalink: /pages/359e6f68/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "elevation"
  - "forest-biomass"
  - "gedi"
  - "larse"
  - "nasa"
  - "tree-cover"
  - "usgs"
---

# GEDI L2B 栅格冠层覆盖垂直剖面指标（版本 2）

英文原名：GEDI L2B Raster Canopy Cover Vertical Profile Metrics (Version 2)

## 这是什么数据

GEDI 二级 B 冠层覆盖与垂直剖面指标产品（GEDI02_B）从每个 GEDI 波形提取生物物理指标。这些指标基于从 L1B 波形推导的方向间隙概率剖面。

叶层剖面测量之间的垂直步长（在 GEDI 文档中称为 dZ）始终为 5 米。

LARSE/GEDI/GEDI02_B_002_MONTHLY 数据集是原始 GEDI02_B 产品的栅格版本。栅格影像组织为对应月份内各轨道的月度合成。只有根级 cover、pai 与 pavd 值及其关联的质量标志与元数据保留为栅格波段。每个 GEDI02_B_002 栅格有 109 个波段。

更多信息见[用户指南](https://lpdaac.usgs.gov/documents/986/GEDI02_UserGuide_V2.pdf)。

全球生态系统动力学调查 [GEDI](https://gedi.umd.edu/) 任务旨在表征生态系统结构与动力学，以实现对地球碳循环与生物多样性的量化与理解的根本改善。GEDI 仪器安装在国际空间站（ISS）上，以最高分辨率与最密集采样在全球北纬 51.6° 与南纬 51.6° 之间收集地球三维结构数据。GEDI 仪器由三台激光器组成，共产生八条波束地面轨迹，瞬时采样八个约 25 米足印，沿轨间隔约 60 米。

产品 | 说明
:--------------------- | :----------------------------------------------
L2A 矢量 | [LARSE/GEDI/GEDI02_A_002](LARSE_GEDI_GEDI02_A_002)
L2A 月度栅格 | [LARSE/GEDI/GEDI02_A_002_MONTHLY](LARSE_GEDI_GEDI02_A_002_MONTHLY)
L2A 表索引 | [LARSE/GEDI/GEDI02_A_002_INDEX](LARSE_GEDI_GEDI02_A_002_INDEX)
L2B 矢量 | [LARSE/GEDI/GEDI02_B_002](LARSE_GEDI_GEDI02_B_002)
L2B 月度栅格 | [LARSE/GEDI/GEDI02_B_002_MONTHLY](LARSE_GEDI_GEDI02_B_002_MONTHLY)
L2B 表索引 | [LARSE/GEDI/GEDI02_B_002_INDEX](LARSE_GEDI_GEDI02_B_002_INDEX)
L4A 生物量矢量 | [LARSE/GEDI/GEDI04_A_002](LARSE_GEDI_GEDI04_A_002)
L4A 月度栅格 | [LARSE/GEDI/GEDI04_A_002_MONTHLY](LARSE_GEDI_GEDI04_A_002_MONTHLY)
L4A 表索引 | [LARSE/GEDI/GEDI04_A_002_INDEX](LARSE_GEDI_GEDI04_A_002_INDEX)
L4B 生物量 | [LARSE/GEDI/GEDI04_B_002](LARSE_GEDI_GEDI04_B_002)
L4D 填补波形 | [LARSE/GEDI/GEDI04_D_002](LARSE_GEDI_GEDI04_D_002)

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球北纬 51.6° 至南纬 51.6°；时间范围：2019 年至 2025 年；分辨率：25 米。
- 时间范围：2019-03-25 至 2025-07-01

## 分辨率与规格

- 空间分辨率：约 25 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| algorithmrun_flag | 若该标志设为 1，L2B 算法运行，指示数据具有足够波形保真度供 L2B 运行。 | 25 |  |
| beam | 波束号。 | 25 |  |
| cover | 总冠层覆盖。 | 25 |  |
| degrade_flag | 指示指向和/或定位信息降级状态的标志。* 3X – ADF CHU 解不可用（ST-2）* 4X – 平台姿态 * 5X – 解质量差（滤波协方差大）* 6X – 数据中断（亦含平台姿态间隙）* 7X – ST 1+2 不可用（相近视轴视场）* 8X – ST 1+2+3 不可用 * 9X – ST 1+2+3 与 ISS 均不可用 * X1 – 机动 * X2 – GPS 数据间隙 * X3 – ST 致盲 * X4 – 其他 * X5 – GPS 接收机时钟漂移 * X6 – 机动 & GPS 接收机时钟漂移 * X7 – GPS 数据间隙 & GPS 接收机时钟漂移 * X8 – ST 致盲 & GPS 接收机时钟漂移 * X9 – 其他 & GPS 接收机时钟漂移。 | 25 |  |
| delta_time | 足印的发射时间，自 2018-01-01 起以 master_time_epoch 为基准以秒计。 | 25 |  |
| fhd_normal | 叶层高度多样性。 | 25 |  |
| l2b_quality_flag | L2B 质量标志。 | 25 |  |
| local_beam_azimuth | 在局部 ENU 框架中激光单位指向矢量的方位角，从北量起、向东为正。 | 25 |  |
| local_beam_elevation | 在局部 ENU 框架中激光单位指向矢量的高度角，从东-北平面量起、向上为正。 | 25 |  |
| pai | 总植物面积指数。 | 25 |  |
| pgap_theta | 总间隙概率（theta）。 | 25 |  |
| selected_l2a_algorithm | 选定的 L2A 算法设置。 | 25 |  |
| selected_rg_algorithm | 选定的 R（地面）算法。 | 25 |  |
| sensitivity | 可穿透的最大冠层覆盖。有效范围为 [0, 1]。超出此范围的值可能存在但必须忽略。它们代表噪声与非陆地表面波形。 | 25 |  |
| solar_azimuth | 在局部 ENU 框架中，从激光弹跳点位置出发的太阳位置矢量的方位角，从北量起、向东为正。 | 25 |  |
| solar_elevation | 在局部 ENU 框架中，从激光弹跳点位置出发的太阳位置矢量的高度角，从东-北平面量起、向上为正。 | 25 |  |
| shot_number | 足印号，唯一标识。该字段格式为 OOOOOBBRRGNNNNNNNN，其中：* OOOOO：轨道号 * BB：波束号 * RR：保留供将来使用 * G：子轨道颗粒号 * NNNNNNNN：足印索引。 | 25 |  |
| shot_number_within_beam | 波束内足印号。 | 25 |  |
| cover_z0 | 0% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z1 | 1% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z2 | 2% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z3 | 3% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z4 | 4% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z5 | 5% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z6 | 6% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z7 | 7% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z8 | 8% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z9 | 9% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z10 | 10% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z11 | 11% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z12 | 12% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z13 | 13% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z14 | 14% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z15 | 15% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z16 | 16% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z17 | 17% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z18 | 18% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z19 | 19% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z20 | 20% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z21 | 21% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z22 | 22% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z23 | 23% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z24 | 24% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z25 | 25% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z26 | 26% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z27 | 27% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z28 | 28% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z29 | 29% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| cover_z30 | 30% 处的累积冠层覆盖垂直剖面。 | 25 |  |
| pai_z0 | 0 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z1 | 1 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z2 | 2 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z3 | 3 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z4 | 4 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z5 | 5 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z6 | 6 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z7 | 7 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z8 | 8 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z9 | 9 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z10 | 10 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z11 | 11 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z12 | 12 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z13 | 13 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z14 | 14 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z15 | 15 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z16 | 16 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z17 | 17 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z18 | 18 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z19 | 19 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z20 | 20 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z21 | 21 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z22 | 22 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z23 | 23 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z24 | 24 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z25 | 25 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z26 | 26 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z27 | 27 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z28 | 28 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z29 | 29 m²/m² 处的植物面积指数剖面。 | 25 |  |
| pai_z30 | 30 m²/m² 处的植物面积指数剖面。 | 25 |  |

## 能拿来做什么

- 森林冠层高度与结构分析
- 地上生物量与碳储量估计
- 生态系统三维结构研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('LARSE/GEDI/GEDI02_B_002_MONTHLY');
```

- 数据集编号（Earth Engine ID）：`LARSE/GEDI/GEDI02_B_002_MONTHLY`
- 提供方：Rasterization: Google and USFS Laboratory for Applications of Remote Sensing in Ecology (LARSE)、NASA GEDI mission, accessed through the USGS LP DAAC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LARSE_GEDI_GEDI02_B_002_MONTHLY

## 许可与引用

- 许可：proprietary
- 关键词：elevation, forest-biomass, gedi, larse, nasa, tree-cover, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GEDI L2A Raster Canopy Top Height (Version 2)](/pages/6e0348e1/)
- [GEDI L2A Vector Canopy Top Height (Version 2)](/pages/4874e1f7/)
- [GEDI L2A table index](/pages/81e014ca/)
- [GEDI L2B Vector Canopy Cover Vertical Profile Metrics (Version 2)](/pages/7bed5b79/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
