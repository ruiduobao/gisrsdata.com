---
title: "全球地上与地下生物量碳密度图"
date: 2026-11-03 12:00:00
permalink: /pages/f5cf8a95/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aboveground"
  - "belowground"
  - "biomass"
  - "carbon"
  - "density"
  - "forest"
  - "forest-biomass"
  - "nasa"
  - "ornl"
  - "vegetation"
---

# 全球地上与地下生物量碳密度图

英文原名：Global Aboveground and Belowground Biomass Carbon Density Maps

## 这是什么数据

本数据集提供 2010 年全球地上与地下生物量碳密度的时间一致且协调的地图，空间分辨率 300 米。地上生物量地图整合了按土地覆盖区分的遥感木本、草地、农田与苔原生物量地图。输入地图汇集自已发表文献，必要时更新以覆盖目标范围或时段。地下生物量地图同样整合了源自每幅地上生物量地图的匹配地图与按土地覆盖区分的经验模型。地上与地下地图随后使用百分比树木覆盖与土地覆盖的辅助地图以及基于规则的决策树分别整合。还提供了报告像元级估计累积不确定性的地图。

提供方注：联合国环境规划署世界保护监测中心（UNEP-WCMC）碳生物量数据集表示 1982 至 2010 年之间的条件（取决于土地覆盖类型）。碳储量的相对格局在本数据集中得到良好表示。[NASA/ORNL 碳生物量数据集](https://daac.ornl.gov/VEGETATION/guides/Global_Maps_C_Density_2010.html) 表示 2010 年的生物量条件，带像元级不确定性估计。每个像元内还表示了非主导土地覆盖类型的额外生物量。更详细的信息，请参阅描述每个数据集的论文：[WCMC](WCMC_biomass_carbon_density_v1_0) [（Soto-Navarro 等 2020）](https://royalsocietypublishing.org/doi/full/10.1098/rstb.2019.0128) 与 NASA/ORNL [（Spawn 等 2020）](https://www.nature.com/articles/s41597-020-0444-4)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2010 年；分辨率：300 米。
- 时间范围：2010-01-01 至 2010-12-31

## 分辨率与规格

- 空间分辨率：约 300 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| agb | 2010 年木本与草本覆盖合计的地上活生物量碳储量密度。包括储存在位于地球表面以上的活植物组织（茎、树皮、枝、细枝）中的碳。不包括曾经附着于活植物但已沉积且不再存活的凋落叶或粗木质残体。 | 300 |  |
| agb_uncertainty | 2010 年木本与草本覆盖合计的地上活生物量碳密度估计的不确定性。不确定性表示通过协调过程以平方和传播的累积标准误。 | 300 |  |
| bgb | 2010 年木本与草本覆盖合计的地下活生物量碳储量密度。包括储存在位于地球表面以下的活植物组织（根）中的碳。不包括死亡与/或脱落的根组织，也不包括土壤有机质。 | 300 |  |
| bgb_uncertainty | 2010 年木本与草本覆盖合计的地下活生物量碳密度估计的不确定性。不确定性表示通过协调过程以平方和传播的累积标准误。 | 300 |  |

## 能拿来做什么

- 全球碳储量评估
- 生物量制图
- 气候变化减缓研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/ORNL/biomass_carbon_density/v1');
```

- 数据集编号（Earth Engine ID）：`NASA/ORNL/biomass_carbon_density/v1`
- 提供方：NASA ORNL DAAC at Oak Ridge National Laboratory、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_ORNL_biomass_carbon_density_v1

## 许可与引用

- 许可：proprietary
- 关键词：aboveground, belowground, biomass, carbon, density, forest, forest-biomass, nasa, ornl, vegetation
- 数据引用：Spawn, S.A., Sullivan, C.C., Lark, T.J. et al. Harmonized global maps of above and
belowground biomass carbon density in the year 2010. Sci Data 7, 112 (2020).
[doi:10.1038/s41597-020-0444-4](https://doi.org/10.1038/s41597-020-0444-4)

- DOI：10.3334/ORNLDAAC/1763

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Global 2020 Forest Classification for IPCC Aboveground Biomass Tier 1 Estimates, V1](/pages/750f4ec5/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ESA CCI 地上生物量（2007、2010、2015–2022，v6.0）](/pages/e9028b43/)
- [GCOM-C/SGLI 三级叶面积指数产品（V1）](/pages/099c4e7b/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
