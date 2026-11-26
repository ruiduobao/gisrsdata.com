---
title: "GEDI L4B 格网地上生物量密度（版本 2）"
date: 2026-11-03 12:00:00
permalink: /pages/188c3bdf/
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

# GEDI L4B 格网地上生物量密度（版本 2）

英文原名：GEDI L4B Gridded Aboveground Biomass Density (Version 2)

## 这是什么数据

本全球生态系统动力学调查（GEDI）L4B 产品提供 1 公里 × 1 公里平均地上生物量密度（AGBD）估计，基于从 2019-04-18 开始的任务第 19 周到 2021-08-04 结束的任务第 138 周的观测。GEDI L4A 足印生物量产品将每个高质量波形转换为 AGBD 预测，L4B 产品使用每个 1 公里单元边界内的样本统计推断平均 AGBD。

更多信息见[用户指南](https://daac.ornl.gov/GEDI/guides/GEDI_L4B_Gridded_Biomass.html)。

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

- 覆盖范围：覆盖范围：全球北纬 51.6° 至南纬 51.6°；时间范围：2019 年至 2021 年；分辨率：1 公里。
- 时间范围：2019-04-18 至 2021-08-04

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| MU | 平均地上生物量密度（MU）：1 公里网格单元的估计平均 AGBD，包括森林与非森林。 | 1000 |  |
| V1 | 方差分量 1（V1）：由 L4A 中使用的样地到 GEDI 模型导致的平均生物量估计不确定性。 | 1000 |  |
| V2 | 方差分量 2（V2）* 若推理模式 = 1，这是 GEDI 对 1 公里单元采样导致的不确定性。* 若推理模式 = 2，这是用墙到墙数据预测生物量（以 L4A 足印产品定标）的模型导致的不确定性。 | 1000 |  |
| SE | 平均地上生物量密度标准误（SE）：平均估计的标准误，结合采样与建模不确定性。 | 1000 |  |
| PE | 标准误占估计平均 AGBD 的比例（PE）。若 >100%，单元值截断为 100。 | 1000 |  |
| NC | 簇数（NC）：与网格单元相交的、至少有一个高质量波形的不同 GEDI 地面轨迹数。 | 1000 |  |
| NS | 样本数（NS）：网格单元内所有地面轨迹上的高质量波形总数。 | 1000 |  |
| QF | 质量标志（QF）* 0=GEDI 域外 * 1=陆地表面 * 2=陆地表面且满足 GEDI 任务 L1 要求（百分比标准误 <20% 或标准误 < 20 Mg ha-1）。 | 1000 |  |
| PS | 预测层（PS），由植物功能型与大陆决定。PS 与一个 L4A 模型参数协方差矩阵关联，该矩阵贡献模型误差方差（表 2）。 | 1000 |  |
| MI | 干扰模式（MI）：用于特定单元的方法。在任务完成之前，只有能做混合推理的单元才填充平均生物量值。* 0=未应用 * 1=混合模型法 * 2=广义分层模型法。 | 1000 |  |

## 能拿来做什么

- 森林冠层高度与结构分析
- 地上生物量与碳储量估计
- 生态系统三维结构研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('LARSE/GEDI/GEDI04_B_002');
```

- 数据集编号（Earth Engine ID）：`LARSE/GEDI/GEDI04_B_002`
- 提供方：USFS Laboratory for Applications of Remote Sensing in Ecology (LARSE)、NASA GEDI mission, accessed through the USGS LP DAAC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LARSE_GEDI_GEDI04_B_002

## 许可与引用

- 许可：proprietary
- 关键词：elevation, forest-biomass, gedi, larse, nasa, tree-cover, usgs
- 数据引用：Dubayah, R.O., J. Armston, S.P. Healey, Z. Yang, P.L. Patterson, S. Saarela,
G. Stahl, L. Duncanson, and J.R. Kellner. 2022. GEDI L4B Gridded Aboveground
Biomass Density, Version 2. ORNL DAAC, Oak Ridge, Tennessee, USA.
[doi:10.3334/ORNLDAAC/2056](https://doi.org/10.3334/ORNLDAAC/2056)

- DOI：10.3334/ORNLDAAC/2056

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GEDI L2A Raster Canopy Top Height (Version 2)](/pages/6e0348e1/)
- [GEDI L2A Vector Canopy Top Height (Version 2)](/pages/4874e1f7/)
- [GEDI L2A table index](/pages/81e014ca/)
- [GEDI L2B Raster Canopy Cover Vertical Profile Metrics (Version 2)](/pages/359e6f68/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
