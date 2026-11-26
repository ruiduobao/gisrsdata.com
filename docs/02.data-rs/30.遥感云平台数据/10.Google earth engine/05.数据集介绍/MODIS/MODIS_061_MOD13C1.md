---
title: "MOD13C1.061 Terra 植被指数 16 天 L3 全球 0.05 度气候建模网格"
date: 2026-11-03 12:00:00
permalink: /pages/7cbb8070/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "16-day"
  - "global"
  - "nasa"
  - "terra"
  - "usgs"
  - "vegetation"
  - "vegetation-indices"
---

# MOD13C1.061 Terra 植被指数 16 天 L3 全球 0.05 度气候建模网格

英文原名：MOD13C1.061: Terra Vegetation Indices 16-Day L3 Global 0.05 Deg Climate Modeling Grid

## 这是什么数据

Terra 中分辨率成像光谱仪（MODIS）植被指数 16 天（MOD13C1）版本 6.1 产品提供逐像元的植被指数（VI）值。有两个主要植被层。第一个是归一化差值植被指数（NDVI），它与现有美国国家海洋和大气管理局-高级甚高分辨率辐射计（NOAA-AVHRR）推导的 NDVI 保持连续性。第二个植被层是增强植被指数（EVI），它在高生物量区域具有改进的灵敏度。气候建模网格（CMG）由 3,600 行 × 7,200 列的 5,600 米（m）像元组成。全球 MOD13C1 数据是格网 16 天 1 公里 MOD13A2 数据的无云空间合成，以三级产品提供，投影在 0.05 度（5,600 米）地理 CMG 上。MOD13C1 在 0.05 度 CMG 分辨率下有 NDVI、EVI、VI QA、反射率数据、角度信息以及空间统计（如平均值、标准差与使用的输入像元数）的数据字段。

注意，MODIS 文档中为 MOD13C1 波段描述的比例因子与偏移已应用于摄入 Earth Engine 的资产。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2026 年；分辨率：5,600 米。
- 时间范围：2000-02-18 至 2026-09-30

## 分辨率与规格

- 空间分辨率：约 5,600 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| NDVI | 16 天 NDVI 平均值。 | 5600 |  |
| EVI | 16 天 EVI 平均值。 | 5600 |  |
| DetailedQA | VI 质量指示。 | 5600 |  |
| sur_refl_b01 | 地表反射率波段 1（红）。 | 5600 | 620-670nm |
| sur_refl_b02 | 地表反射率波段 2（近红外）。 | 5600 | 841-876nm |
| sur_refl_b03 | 地表反射率波段 3（蓝）。 | 5600 | 459-479nm |
| sur_refl_b07 | 地表反射率波段 7（中红外）。 | 5600 | 2105-2155nm |
| SolarZenith | VI 像元的观测天顶角。 | 5600 |  |
| NDVIStdDev | 由输入 NDVI 像元计算的标准差。 | 5600 |  |
| EVIStdDev | 由输入 NDVI 像元计算的标准差。 | 5600 |  |
| Pixel_1km | 使用的 1 公里输入像元数。 | 5600 |  |
| Pixel_30deg_1km | VZ 角小于 ±30 度的 1 公里输入像元数。 | 5600 |  |
| SummaryQA | VI 像元的质量可靠性。 | 5600 |  |

## 能拿来做什么

- 土地覆盖与植被监测
- 全球变化研究
- 遥感算法验证

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/061/MOD13C1');
```

- 数据集编号（Earth Engine ID）：`MODIS/061/MOD13C1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD13C1

## 许可与引用

- 许可：proprietary
- 关键词：16-day, global, nasa, terra, usgs, vegetation, vegetation-indices
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD13C1.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD15A3H.061 MODIS 叶面积指数/FPAR 4 天全球 500 米](/pages/4b457845/)
- [MOD13A1.061 Terra Vegetation Indices 16-Day Global 500m](/pages/d6ab7a99/)
- [MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km](/pages/d5e48b42/)
- [MOD13A3.061 Vegetation Indices Monthly L3 Global 1 km SIN Grid](/pages/9a6615e4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
