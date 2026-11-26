---
title: "加拿大森林林龄图 2019（Landsat 衍生）"
date: 2026-11-03 12:00:00
permalink: /pages/65b34141/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "canada"
  - "forest"
  - "forest-biomass"
---

# 加拿大森林林龄图 2019（Landsat 衍生）

英文原名：Landsat-derived forest age for Canada 2019

## 这是什么数据

这是一幅 2019 年的加拿大森林「年龄地图」，分辨率 30 米，覆盖加拿大各森林生态区。它综合 Landsat 数据（扰动、地表反射率合成、森林结构）和 MODIS 总初级生产力来推算林龄。

林龄有三种定法，精度依次降低：能在卫星数据里直接识别出扰动（如采伐、火烧）的，用「扰动法」，最准；用光谱信息加森林演替逻辑推断的，用「恢复法」；没有扰动证据的，用实测树高与生长收获模型反演异速生长方程的「异速法」。由于加拿大森林近期大面积扰动不多，异速法覆盖面积最大（86.6%）。所有年龄的树都制图，超过 150 年的合并为「老龄树」一类。

## 覆盖范围与时间

- 覆盖范围：加拿大森林生态区
- 时间范围：2019-01-01 至 2020-01-01

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| forest | 森林林龄 | 30 |  |

## 能拿来做什么

- 估算森林碳储量及其随林龄的变化
- 研究加拿大森林的扰动与恢复历史
- 森林经营与生物多样性栖息地评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('CANADA/NFIS/NTEMS/CA_FOREST_AGE');
```

- 数据集编号（Earth Engine ID）：`CANADA/NFIS/NTEMS/CA_FOREST_AGE`
- 提供方：National Forest Information System、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CANADA_NFIS_NTEMS_CA_FOREST_AGE

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：canada, forest, forest-biomass
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球 SPEI 干旱指数数据库（2.11 版）](/pages/2a1f609f/)
- [全球 SPEI 干旱指数数据库（2.10 版，已弃用）](/pages/9bb9126f/)
- [全球蒸散发与总初级生产力 PML_V2.1.7（已弃用）](/pages/78dca129/)
- [全球蒸散发与总初级生产力 PML_V2.1.8（已弃用）](/pages/82a78155/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
