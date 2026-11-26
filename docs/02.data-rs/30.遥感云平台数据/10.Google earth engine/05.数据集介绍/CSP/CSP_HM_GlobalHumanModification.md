---
title: "CSP 全球人类改造指数（gHM）"
date: 2026-11-03 12:00:00
permalink: /pages/1227f44f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "csp"
  - "fragmentation"
  - "human-modification"
  - "landcover"
  - "landscape-gradient"
  - "population"
  - "stressors"
  - "tnc"
---

# CSP 全球人类改造指数（gHM）

英文原名：CSP gHM: Global Human Modification

## 这是什么数据

全球人类改造数据集（gHM）在 1 平方公里分辨率上提供全球陆地受人类改造程度的累积度量。gHM 取值范围 0.0–1.0，计算方式是估计给定位置（像元）被改造的比例，以及与某种人类改造类型（即「压力源」）相关的估计改造强度。约 2016 年的 5 类主要人为压力源由 13 个独立数据集绘制：

* 人类居住（人口密度、建成区）
* 农业（农田、牲畜）
* 交通（主要、次要和双轨道路；铁路）
* 采矿与能源生产
* 电力基础设施（输电线、夜间灯光）

更多方法细节见论文。该资产已重投影为 WGS84 以便在 Earth Engine 中使用。

## 覆盖范围与时间

- 覆盖范围：全球陆地
- 时间范围：2016-01-01 至 2016-12-31

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| gHM | 全球人类改造指数 | 1000 |  |

## 能拿来做什么

- 全球人类活动强度与景观改造程度评估
- 保护规划中的人类压力分析
- 土地退化与生境破碎化研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('CSP/HM/GlobalHumanModification');
```

- 数据集编号（Earth Engine ID）：`CSP/HM/GlobalHumanModification`
- 提供方：Conservation Science Partners、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CSP_HM_GlobalHumanModification

## 许可与引用

- 许可：CC-BY-NC-SA-4.0
- 关键词：csp, fragmentation, human-modification, landcover, landscape-gradient, population, stressors, tnc
- 数据引用：Kennedy, C.M., J.R. Oakleaf, D.M. Theobald, S. Baruch-Murdo, and J. Kiesecker. 2019. Managing
the middle: A shift in conservation priorities based on the global human modification gradient.
Global Change Biology 00:1-16. [doi:10.1111/gcb.14549](https://doi.org/10.1111/gcb.14549)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球油棕分布与种植年份（1990–2021）v1.2](/pages/36b9933f/)
- [加拿大年度作物种植清单（AAFC）](/pages/ad6873e3/)
- [哥白尼全球土地覆盖 LC100 第 3 集合（100 米）](/pages/ab21afa1/)
- [欧洲 CORINE 土地覆盖 V20](/pages/a9db0306/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
