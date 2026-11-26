---
title: "IBGE：巴西大区 2025"
date: 2026-11-03 12:00:00
permalink: /pages/bc8e9520/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "borders"
  - "boundaries"
  - "brazil"
  - "ibge"
  - "infrastructure-boundaries"
  - "table"
---

# IBGE：巴西大区 2025

英文原名：IBGE: Brazil Macro Regions 2025

## 这是什么数据

巴西地理与统计研究所（Instituto Brasileiro de Geografia e Estatística，IBGE）提供巴西领土结构的官方制图表达。该数据集包含巴西五个官方大区（Norte、Nordeste、Sudeste、Sul 和 Centro-Oeste）2025 参考年（Malha Territorial 2025）的边界。

大区是为统计、规划和行政目的而设立的联邦单位（州）的分组。

有关方法和技术规范的更多信息，见 [IBGE 市镇网格文档](https://www.ibge.gov.br/en/geosciences/territorial-organization/territorial-meshes/2786-np-municipal-mesh/18890-municipal-mesh.html)。

## 覆盖范围与时间

- 覆盖范围：巴西
- 时间范围：2025-01-01 至 2026-01-01

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| CD_REGIAO | STRING | 1 位大区代码（1=Norte，2=Nordeste，3=Sudeste，4=Sul，5=Centro-Oeste） |
| NM_REGIAO | STRING | 大区名称 |
| SIGLA_RG | STRING | 大区缩写（N、NE、SE、S、CO） |
| AREA_KM2 | DOUBLE | 面积（平方公里） |

## 能拿来做什么

- 巴西行政区划与统计制图
- 区域分析与空间统计
- 领土网格参考

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('IBGE/REGIOES/V2025');
```

- 数据集编号（Earth Engine ID）：`IBGE/REGIOES/V2025`
- 提供方：IBGE、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/IBGE_REGIOES_V2025

## 许可与引用

- 许可：proprietary
- 关键词：borders, boundaries, brazil, ibge, infrastructure-boundaries, table
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ESA WorldCereal 农业生态区（AEZ）v100](/pages/1c72ec66/)
- [FAO GAUL 500 米简化版：全球行政区划图层 2015，国家边界](/pages/6acf3380/)
- [FAO GAUL 500 米简化版：全球行政区划图层 2025，一级行政区划](/pages/b2ab3105/)
- [FAO GAUL 500 米简化版：全球行政区划图层 2025，二级行政区划](/pages/313e2d03/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
