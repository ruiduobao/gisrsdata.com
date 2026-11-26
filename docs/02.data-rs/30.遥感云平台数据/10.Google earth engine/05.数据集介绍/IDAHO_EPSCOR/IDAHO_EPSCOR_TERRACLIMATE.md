---
title: "TerraClimate：全球陆地表面月度气候与气候水分平衡"
date: 2026-11-03 12:00:00
permalink: /pages/a996bfa2/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "drought"
  - "evapotranspiration"
  - "geophysical"
  - "global"
  - "merced"
  - "monthly"
  - "palmer"
  - "pdsi"
  - "precipitation"
  - "runoff"
  - "temperature"
---

# TerraClimate：全球陆地表面月度气候与气候水分平衡

英文原名：TerraClimate:  Monthly Climate and Climatic Water Balance for Global Terrestrial Surfaces, University of Idaho

## 这是什么数据

TerraClimate 是全球陆地表面的月度气候和气候水分平衡数据集。它使用气候辅助插值，将 [WorldClim 数据集](https://www.worldclim.org/) 的高空间分辨率气候正常值与来自 [CRU Ts4.0](https://data.ceda.ac.uk/badc/cru/data/cru_ts/) 和[日本 55 年再分析（JRA55）](https://jra.kishou.go.jp/JRA-55/index_en.html) 的较粗空间分辨率但随时间变化的数据结合。从概念上讲，该程序将 CRU Ts4.0/JRA55 插值的时间变化异常应用于 WorldClim 的高空间分辨率气候学，以创建一个覆盖更长时间记录的高空间分辨率数据集。

对于全球大多数陆地表面，温度、降水和水汽压的时间信息继承自 CRU Ts4.0。然而，对于 CRU 数据没有气候站贡献的区域（包括整个南极洲，以及非洲、南美洲的部分地区和分散的岛屿），使用 JRA55 数据。对于温度、水汽压和降水等主要气候变量，爱达荷大学还提供额外数据，说明对 TerraClimate 所用 CRU Ts4.0 数据有贡献的站点数量（0 到 8 个之间）。太阳辐射和风速完全使用 JRA55。

TerraClimate 还使用水分平衡模型生成月度地表水分平衡数据集，该模型纳入了参考蒸散量、降水、温度和插值的植物可提取土壤水分容量。在 0.5° 网格上使用了修改的 Thornthwaite-Mather 气候水分平衡模型和来自 Wang-Erlandsson 等（2016）的可提取土壤水分储存容量数据。

数据局限性：

1. 数据中的长期趋势继承自父数据集。TerraClimate 不应直接用于趋势的独立评估。

2. TerraClimate 不会捕捉比父数据集更精细尺度的时间变率，因此无法捕捉地形降水比率和逆温的变率。

3. 水分平衡模型非常简单，没有考虑植被类型的异质性或其对环境条件变化的生理响应。

4. 在数据稀疏地区（例如南极洲）验证有限。

## 覆盖范围与时间

- 覆盖范围：全球陆地
- 时间范围：1958-01-01 至 2024-12-01

## 分辨率与规格

- 空间分辨率：约 4,638.3 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| aet | 实际蒸散量，使用一维土壤水分平衡模型推导 | 4638.3 |  |
| def | 气候水分亏缺，使用一维土壤水分平衡模型推导 | 4638.3 |  |
| pdsi | 帕尔默干旱严重指数 | 4638.3 |  |
| pet | 参考蒸散量（ASCE Penman-Monteith） | 4638.3 |  |
| pr | 降水累积量 | 4638.3 |  |
| ro | 径流，使用一维土壤水分平衡模型推导 | 4638.3 |  |
| soil | 土壤水分，使用一维土壤水分平衡模型推导 | 4638.3 |  |
| srad | 向下地表短波辐射 | 4638.3 |  |
| swe | 雪水当量，使用一维土壤水分平衡模型推导 | 4638.3 |  |
| tmmn | 最低温度 | 4638.3 |  |
| tmmx | 最高温度 | 4638.3 |  |
| vap | 水汽压 | 4638.3 |  |
| vpd | 水汽压差 | 4638.3 |  |
| vs | 10 米处风速 | 4638.3 |  |

## 能拿来做什么

- 全球干旱与水分平衡分析
- 气候变化影响研究
- 生态建模驱动数据

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('IDAHO_EPSCOR/TERRACLIMATE');
```

- 数据集编号（Earth Engine ID）：`IDAHO_EPSCOR/TERRACLIMATE`
- 提供方：University of California Merced、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/IDAHO_EPSCOR_TERRACLIMATE

## 许可与引用

- 许可：CC0-1.0
- 关键词：climate, drought, evapotranspiration, geophysical, global, merced, monthly, palmer, pdsi, precipitation, runoff, temperature, vapor, water-vapor, weather-and-climate, wind
- 数据引用：Abatzoglou, J.T., S.Z. Dobrowski, S.A. Parks, K.C. Hegewisch, 2018,
Terraclimate, a high-resolution global dataset of monthly climate and
climatic water balance from 1958-2015, Scientific Data 5:170191,
[doi:10.1038/sdata.2017.191](https://doi.org/10.1038/sdata.2017.191)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ESA CCI 地上生物量（2007、2010、2015–2022，v6.0）](/pages/e9028b43/)
- [WaPOR 实际蒸散发与截留 2.0](/pages/f46d014b/)
- [WaPOR 实际蒸散发与截留 3.0](/pages/aca03f09/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
