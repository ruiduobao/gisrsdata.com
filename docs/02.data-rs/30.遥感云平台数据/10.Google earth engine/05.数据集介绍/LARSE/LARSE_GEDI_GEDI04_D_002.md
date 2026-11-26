---
title: "GEDI L4D 填补波形，版本 2"
date: 2026-11-03 12:00:00
permalink: /pages/174064cf/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "biomass"
  - "canopy"
  - "elevation"
  - "forest"
  - "forest-biomass"
  - "gedi"
  - "larse"
  - "nasa"
  - "tree-cover"
---

# GEDI L4D 填补波形，版本 2

英文原名：GEDI L4D Imputed Waveforms, Version 2

## 这是什么数据

GEDI 四级 D（L4D）产品在全球纬度 −51.6 与 51.6 度之间，提供任务的足印级 L2A V002、L2B V002 与 L4A 版本 2.1 产品样本的 30 米空间细化。

使用 k 近邻（k-NN）算法与 Landsat 时间序列数据，将高质量 GEDI 足印填补到每个 30 米像元。为每个 10 × 10 公里瓦片开发了不同的最近邻模型，潜在填补足印取自以瓦片为中心、至少 30 × 30 公里的支持区域。填补使用以目标年份 2023 年为中心的 Landsat 时间序列影像指定单个最近邻。

最基本的 30 米输出是填补像元的足印号（分五个字段传递），由此可检索任何足印级量。还包括常用波形属性的预测，如 L2A 产品的相对高度（RH）指标、L2B 的冠层覆盖与 L4A 的地上生物量密度（AGBD）。

更多信息见[用户指南](https://daac.ornl.gov/GEDI/guides/GEDI_L4D_Imputed_Waveforms.html)。

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

- 覆盖范围：覆盖范围：全球北纬 51.6° 至南纬 51.6°；时间范围：2019 年至 2023 年；分辨率：30 米。
- 时间范围：2019-04-18 至 2023-03-16

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| rh10 | 相对高度指标（rh10）。 | 30 |  |
| rh20 | 相对高度指标（rh20）。 | 30 |  |
| rh30 | 相对高度指标（rh30）。 | 30 |  |
| rh40 | 相对高度指标（rh40）。 | 30 |  |
| rh50 | 相对高度指标（rh50）。 | 30 |  |
| rh60 | 相对高度指标（rh60）。 | 30 |  |
| rh70 | 相对高度指标（rh70）。 | 30 |  |
| rh80 | 相对高度指标（rh80）。 | 30 |  |
| rh90 | 相对高度指标（rh90）。 | 30 |  |
| rh95 | 相对高度指标（rh95）。 | 30 |  |
| rh98 | 相对高度指标（rh98）。 | 30 |  |
| cover_z_000 | 冠层覆盖。 | 30 |  |
| agbd | 地上生物量密度。 | 30 |  |
| sensitivity_a2 | 灵敏度。 | 30 |  |
| shot_orbit | 足印号的轨道分量。 | 30 |  |
| shot_beam | 足印号的波束分量。 | 30 |  |
| shot_future | 足印号的未来分量。 | 30 |  |
| shot_granule | 足印号的颗粒分量。 | 30 |  |
| shot_index | 足印号的足印索引分量。 | 30 |  |
| QA | 质量评估掩膜。 | 30 |  |

## 能拿来做什么

- 森林冠层高度与结构分析
- 地上生物量与碳储量估计
- 生态系统三维结构研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('LARSE/GEDI/GEDI04_D_002');
```

- 数据集编号（Earth Engine ID）：`LARSE/GEDI/GEDI04_D_002`
- 提供方：ORNL DAAC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LARSE_GEDI_GEDI04_D_002

## 许可与引用

- 许可：proprietary
- 关键词：biomass, canopy, elevation, forest, forest-biomass, gedi, larse, nasa, tree-cover
- 数据引用：Seo, E., Healey, S. P., Yang, Z., Dubayah, R. O., De Conto, T., & Armston, J. (2025). GEDI L4D Imputed Waveforms, Version 2 (Version 2). ORNL Distributed Active Archive Center. https://doi.org/10.3334/ORNLDAAC/2455

- DOI：10.3334/ORNLDAAC/2455

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GEDI L2A Raster Canopy Top Height (Version 2)](/pages/6e0348e1/)
- [GEDI L2A Vector Canopy Top Height (Version 2)](/pages/4874e1f7/)
- [GEDI L2A table index](/pages/81e014ca/)
- [GEDI L2B Raster Canopy Cover Vertical Profile Metrics (Version 2)](/pages/359e6f68/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
