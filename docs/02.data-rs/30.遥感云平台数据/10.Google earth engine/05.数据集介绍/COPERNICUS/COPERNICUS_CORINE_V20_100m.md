---
title: "欧洲 CORINE 土地覆盖 V20"
date: 2026-11-03 12:00:00
permalink: /pages/a9db0306/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "clc"
  - "copernicus"
  - "corine"
  - "eea"
  - "esa"
  - "eu"
  - "landcover"
  - "landuse-landcover"
---

# 欧洲 CORINE 土地覆盖 V20

英文原名：Copernicus CORINE Land Cover

## 这是什么数据

CORINE 土地覆盖（CLC）是欧洲标准的土地覆盖清查，1985 年启动，目的是把欧洲的土地数据采集标准化，支撑环境政策制定。项目由欧洲环境署（EEA）在欧盟哥白尼计划框架下协调、各国团队实施。参与国家已增至 33 个 EEA 成员国加 6 个合作国家（EEA39），总面积超过 580 万平方公里。

本版（V20）中的 CLC2018 对应 2018 年的土地覆盖/利用状态。第一轮清查的参考年是 1990 年，2000 年做了第一次更新，此后更新周期定为 6 年。制图以卫星影像为几何与专题基础，实地数据作必要的辅助信息。基本技术参数自始未变——分类体系 44 类、最小制图单元 25 公顷、最小制图宽度 100 米——所以各轮清查结果可以互相比较。

各资产实际覆盖时段：1990 资产为 1989–1998 年；2000 资产为 1999–2001 年；2006 资产为 2005–2007 年；2012 资产为 2011–2012 年；2018 资产为 2017–2018 年。

## 覆盖范围与时间

- 覆盖范围：欧洲（欧洲环境署 39 个成员与合作国家，总面积超过 580 万平方公里）
- 时间范围：1986-01-01 至 2018-12-31
- 更新节奏：每 6 年更新一轮

## 分辨率与规格

- 空间分辨率：约 100 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| landcover | 土地覆盖 | 100 |  |

## 能拿来做什么

- 1990 年以来欧洲土地覆盖与土地利用变化分析
- EEA 各国的环境政策报告
- 欧洲统一 44 类分类的底图

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('COPERNICUS/CORINE/V20/100m');
```

- 数据集编号（Earth Engine ID）：`COPERNICUS/CORINE/V20/100m`
- 提供方：EEA/Copernicus、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_CORINE_V20_100m

## 许可与引用

- 许可：proprietary
- 关键词：clc, copernicus, corine, eea, esa, eu, landcover, landuse-landcover
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [欧洲 CORINE 土地覆盖 V18（已弃用）](/pages/5ec608fc/)
- [全球油棕分布与种植年份（1990–2021）v1.2](/pages/36b9933f/)
- [加拿大年度作物种植清单（AAFC）](/pages/ad6873e3/)
- [哥白尼全球土地覆盖 LC100 第 3 集合（100 米）](/pages/ab21afa1/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
