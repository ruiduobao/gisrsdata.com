---
title: "USGS Landsat 9 Collection 2 Tier 1 TOA 反射率"
date: 2026-11-03 12:00:00
permalink: /pages/1f26c0ae/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "c2"
  - "global"
  - "landsat"
  - "satellite-imagery"
  - "toa"
  - "usgs"
---

# USGS Landsat 9 Collection 2 Tier 1 TOA 反射率

英文原名：USGS Landsat 9 Collection 2 Tier 1 TOA Reflectance

## 这是什么数据

Landsat 9 Collection 2 Tier 1定标大气层顶（TOA）反射率。定标系数从影像元数据中提取。TOA 计算细节见 [Chander et al. (2009)](https://www.sciencedirect.com/science/article/pii/S0034425709000169)。

数据质量最高的 Landsat 影像被归入 Tier 1，被认为适合时间序列处理分析。Tier 1 包括一级精密地形（L1TP）处理数据，其辐射定标特征明确，并在不同 Landsat 传感器之间相互定标。Tier 1 影像的地理配准将保持一致并在规定容差内 [≤12 米均方根误差（RMSE）]。所有 Tier 1 Landsat 数据在整个集合中都可视为一致且相互定标（与传感器无关）。更多信息见 [USGS 文档](https://www.usgs.gov/core-science-systems/nli/landsat/landsat-collections)。

T1_RT 集合同时包含 Tier 1 与实时（RT）资产。新获取的 Landsat 7 ETM+ 与 Landsat 8 OLI/TIRS 数据在下行后即处理，但使用预测星历、初始缓冲模式参数或初始 TIRS 视线模型参数。数据被置于实时层并可立即下载。一旦数据用最终星历、更新的缓冲模式参数与精化的 TIRS 参数重新处理，产品即转入 Tier 1 或 Tier 2 并从实时层移除。从实时层转入 Tier 1 或 Tier 2 的延迟为 14 至 26 天。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2021 年至今；分辨率：15–100 米（多光谱 30 米）。
- 时间范围：2021-10-31 至 2026-11-02

## 分辨率与规格

- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B1 | 海岸气溶胶。 | 30 | 0.43 - 0.45 &mu;m |
| B2 | 蓝光。 | 30 | 0.45 - 0.51 &mu;m |
| B3 | 绿光。 | 30 | 0.53 - 0.59 &mu;m |
| B4 | 红光。 | 30 | 0.64 - 0.67 &mu;m |
| B5 | 近红外。 | 30 | 0.85 - 0.88 &mu;m |
| B6 | 短波红外 1。 | 30 | 1.57 - 1.65 &mu;m |
| B7 | 短波红外 2。 | 30 | 2.11 - 2.29 &mu;m |
| B8 | 波段 8 全色。 | 15 | 0.50 - 0.68 &mu;m |
| B9 | 卷云。 | 30 | 1.36 - 1.38 &mu;m |
| B10 | 热红外 1，由 100 米重采样至 30 米。 | 30 | 10.60 - 11.19 &mu;m |
| B11 | 热红外 2，由 100 米重采样至 30 米。 | 30 | 11.50 - 12.51 &mu;m |
| QA_PIXEL | Landsat Collection 2 OLI/TIRS QA 比特掩膜。 | 30 |  |
| QA_RADSAT | 辐射饱和 QA。 | 30 |  |
| SAA | 太阳方位角。 | 30 |  |
| SZA | 太阳天顶角。 | 30 |  |
| VAA | 观测方位角。 | 30 |  |
| VZA | 观测天顶角。 | 30 |  |

## 能拿来做什么

- Landsat 影像检索与分析
- 地表反射率与地表温度应用
- 长时间序列土地覆盖监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('LANDSAT/LC09/C02/T1_TOA');
```

- 数据集编号（Earth Engine ID）：`LANDSAT/LC09/C02/T1_TOA`
- 提供方：USGS/Google、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC09_C02_T1_TOA

## 许可与引用

- 许可：PDDL-1.0
- 关键词：c2, global, landsat, satellite-imagery, toa, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [USGS Landsat 9 Collection 2 Tier 1 Raw Scenes](/pages/e4bd161a/)
- [USGS Landsat 9 Collection 2 Tier 2 Raw Scenes](/pages/9e77eb63/)
- [USGS Landsat 9 Collection 2 Tier 2 TOA Reflectance](/pages/2ee2b33c/)
- [USGS Landsat 9 Level 2, Collection 2, Tier 1](/pages/4ca33bbc/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
