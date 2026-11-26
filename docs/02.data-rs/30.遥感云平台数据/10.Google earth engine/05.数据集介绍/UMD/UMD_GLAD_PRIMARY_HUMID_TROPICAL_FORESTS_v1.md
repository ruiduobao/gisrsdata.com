---
title: "原始湿润热带森林"
date: 2026-11-03 12:00:00
permalink: /pages/9498083c/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "forest"
  - "forest-biomass"
  - "glad"
  - "global"
  - "landsat-derived"
  - "umd"
---

# 原始湿润热带森林

英文原名：Primary Humid Tropical Forests

## 这是什么数据

原始湿润热带森林提供众多全球生态系统服务，但持续受到经济驱动因素导致的砍伐威胁。为便于国家土地利用规划并平衡经济发展与维持生态系统服务的目标，UMD GLAD 团队创建了原始湿润热带森林图。原始森林范围使用全球获取、免费且一致处理的 Landsat 影像，以 30 米空间分辨率制图，基准年为 2001 年。

## 覆盖范围与时间

- 覆盖范围：空间：全球湿润热带；时间：2001 年；分辨率：30 米。
- 时间范围：2001-01-01 至 2002-01-01

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Primary_HT_forests | 原始湿润热带森林 | 30 |  |

## 能拿来做什么

- 做原始森林保护与监测。
- 评估原始森林损失与碳排放。
- 为土地利用规划提供原始森林基线。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('UMD/GLAD/PRIMARY_HUMID_TROPICAL_FORESTS/v1');
```

- 数据集编号（Earth Engine ID）：`UMD/GLAD/PRIMARY_HUMID_TROPICAL_FORESTS/v1`
- 提供方：UMD/GLAD、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/UMD_GLAD_PRIMARY_HUMID_TROPICAL_FORESTS_v1

## 许可与引用

- 许可：proprietary
- 关键词：forest, forest-biomass, glad, global, landsat-derived, umd
- 数据引用：Turubanova S., Potapov P., Tyukavina, A., and Hansen M. (2018) Ongoing primary forest
loss in Brazil, Democratic Republic of the Congo, and Indonesia. Environmental
Research Letters.
[https://doi.org/10.1088/1748-9326/aacd1c](https://doi.org/10.1088/1748-9326/aacd1c)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [AG100：ASTER 全球发射率数据集 100 米 V003](/pages/3510f165/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ECOSTRESS 分片辅助 NDVI 与反照率 L2 全球 70 米 V002](/pages/a7bebe55/)
- [ECOSTRESS 地表温度与发射率 L2 全球 70 米 V002](/pages/f726b0e6/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
