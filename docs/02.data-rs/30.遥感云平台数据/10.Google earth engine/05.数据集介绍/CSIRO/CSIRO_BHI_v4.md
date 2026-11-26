---
title: "CSIRO 全球生物多样性指标"
date: 2026-11-03 12:00:00
permalink: /pages/5e19a751/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "bhi"
  - "biodiversity"
  - "csiro"
  - "ecosystems"
  - "habitat"
  - "species"
---

# CSIRO 全球生物多样性指标

英文原名：CSIRO Global Biodiversity Indicators

## 这是什么数据

CSIRO 生物多样性指标 v4 数据集由 CSIRO 使用 BILBI（大尺度生物多样性指标生物地理基础设施）框架生产，以 30 角秒（约 1 公里）分辨率模拟 2000 至 2024 年逐年的全球陆地生物多样性指标。这些指标从系统层面呈现气候变化背景下生物多样性保护、预期存续与韧性的变化。

另有一幅配套的静态全球权重面，作为独立影像提供（CSIRO/BHI/v4_weights）。它表示陆地像元间组成相似性的总和，用于计算这些生物多样性指标的区域与全球几何聚合。

指标的详细解释与推导方法见 [CSIRO Biodiversity Modelling](https://research.csiro.au/biodiversitymodelling/indicators-tracking-progress-for-biodiversity/)。

## 覆盖范围与时间

- 覆盖范围：全球陆地
- 时间范围：2000-01-01 至 2025-01-01
- 更新节奏：逐年

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| bhi | 生物多样性生境指数：估计每个像元内保留的物种多样性比例，取决于自然生态系统的面积、状况与连通性 | 1000 |  |
| beri | 生物气候生态系统韧性指数：估计景观在气候变化下保留物种多样性的能力，取决于这些景观中自然生态系统的面积、状况与连通性 | 1000 |  |
| parc_rep | 保护地代表性：估计陆地保护地系统对任一区域全部环境与生物多样性的生态代表程度 | 1000 |  |
| parc_con | 保护地连通性：估计保护地彼此之间、以及与完整自然生态系统区域之间的功能连通程度 | 1000 |  |
| ecosystem_condition | 生态系统状况：估计任一地点相对于未受扰动参考状态的生物完整性（0–100%） | 1000 |  |

## 能拿来做什么

- 生物多样性保护成效的全球评估
- 气候变化下物种存续与生态韧性分析
- 保护地网络的代表性与连通性评价
- 生态系统状况监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('CSIRO/BHI/v4');
```

- 数据集编号（Earth Engine ID）：`CSIRO/BHI/v4`
- 提供方：CSIRO、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CSIRO_BHI_v4

## 许可与引用

- 许可：CC-BY-NC-SA-4.0
- 关键词：bhi, biodiversity, csiro, ecosystems, habitat, species
- 数据引用：Ware, C., Valavi, R., Vickers, M., Giljohann, K., Mokany, K., Purvis, A.,
Walkden, P., De Palma, A., Duffin, C., Contu, S., Harwood, T., Hoskins, A.,
Ferrier, S. (2024). Global biodiversity indicator data for BHI, BERI,
PARC-representativeness, PARC-connectedness and ecosystem condition
(2000-2024). CSIRO. [doi:10.25919/3aka-y730](https://doi.org/10.25919/3aka-y730)

- DOI：10.25919/3aka-y730

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球 SPEI 干旱指数数据库（2.11 版）](/pages/2a1f609f/)
- [加拿大森林林龄图 2019（Landsat 衍生）](/pages/65b34141/)
- [全球 SPEI 干旱指数数据库（2.10 版，已弃用）](/pages/9bb9126f/)
- [全球蒸散发与总初级生产力 PML_V2.1.7（已弃用）](/pages/78dca129/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
