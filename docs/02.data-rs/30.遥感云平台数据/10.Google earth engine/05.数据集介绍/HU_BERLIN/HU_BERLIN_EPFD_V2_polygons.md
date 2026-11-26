---
title: "欧洲原始森林数据集——多边形"
date: 2026-11-03 12:00:00
permalink: /pages/66501b6e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "europe"
  - "forest"
  - "forest-biomass"
  - "table"
---

# 欧洲原始森林数据集——多边形

英文原名：European Primary Forest Dataset - Polygons

## 这是什么数据

欧洲原始森林数据整合了 48 个不同的、以实地调查为主的原始森林数据集，包含分布在 33 个国家的 18,411 个单独斑块（4110 万公顷）。它主要包括原始老林、晚期演替森林，但也包括一些早期演替阶段和在自然干扰与自然更新后起源、且随后未经管理的幼林。

更多信息，包括完整的作者名单及其所属机构，见[数据集文档](https://www.nature.com/articles/s41597-021-00988-7)。该数据集基于多边形，每个多边形代表一片带边界的原始森林。

## 覆盖范围与时间

- 覆盖范围：欧洲（33 个国家）
- 时间范围：2000-01-01 至 2019-12-31

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| BIOGEOGRAP | STRING | 生物地理区域由欧洲环境署定义，为以下之一：高山、北极、大西洋、黑海、北方、大陆、马卡罗尼西亚、地中海、潘诺尼亚或草原。 |
| CONTACT_PE | STRING | 联系人 |
| DOMINANT_1 | STRING | 林冠层优势树种的物种（拉丁名） |
| DOMINANT_2 | STRING | 林冠层次优势树种的物种（拉丁名）（如有） |
| DOMINANT_T | STRING | 林冠层第三优势树种的物种（拉丁名）（如有） |
| FOREST_NAM | STRING | 林分名称（如适用，否则可以是更广泛区域的名称） |
| FOREST_SHA | DOUBLE | 多边形实际被森林覆盖的比例，假设高自然度等级且范围大的原始森林可能包含暂时或永久未被森林覆盖的土地。 |
| FOREST_TYP | INT | 根据欧洲环境署定义的森林类别划分的主要森林类型，基于欧洲潜在植被类型图。可能的值： * 1：北方 * 2：半北方-温带 * 3：高山针叶 * 4：嗜酸栎-桦 * 5：中生落叶 * 6：低地山毛榉 * 7：山地山毛榉 * 8：嗜热落叶 * 9：阔叶常绿 * 10：地中海针叶 * 11：泥炭沼泽 * 12：洪泛区 * 13：非河流桤-桦-白杨 |
| FOREST_T_1 | INT | 根据欧洲环境署定义的森林类别划分的第二主要森林类型，基于欧洲潜在植被类型图 |
| ID_Dataset | STRING | 数据集的 ID |
| LAST_DISTU | STRING | LAST_DISTURBANCE1_TYPE，最后一次干扰事件的类型。可能的值： * 1：火灾 * 2：风倒 * 3：洪水 * 4：滑坡/雪崩 * 5：采伐/收获 * 6：病害/虫害暴发 * 7：其他自然 * 8：其他人为 |
| LAST_DIS_1 | INT | LAST_DISTURBANCE1_YEAR，干扰事件 1 发生的年份 |
| LAST_DIS_2 | INT | LAST_DISTURBANCE1_INTENSITY，干扰事件 1 的强度。可能的值： * 1：轻微（<20% 的林分受干扰） * 2：中度（20–70% 的林分受干扰） * 3：林分更替（>70% 的林分受干扰） |
| LAST_DIS_3 | STRING | LAST_DISTURBANCE2_TYPE，倒数第二次干扰事件的类型。可能的值： * 1：火灾 * 2：风倒 * 3：洪水 * 4：滑坡/雪崩 * 5：采伐/收获 * 6：病害/虫害暴发 * 7：其他自然 * 8：其他人为 |
| LAST_DIS_4 | INT | LAST_DISTURBANCE2_YEAR，干扰事件 2 发生的年份 |
| LAST_DIS_5 | INT | LAST_DISTURBANCE2_INTENSITY，干扰事件 2 的强度。可能的值： * 1：轻微（<20% 的林分受干扰） * 2：中度（20–70% 的林分受干扰） * 3：林分更替（>70% 的林分受干扰） |
| LOCATION | STRING | 原始森林残存斑块所在的市镇、保护区或区域 |
| NATURALNES | INT | 原始森林残存斑块的自然度等级：可能的值： * 10：n10——原始森林 * 9：n9——处女林 * 8：n8——边境森林 * 7：n7——近处女林 * 6：n6——老龄林 * 5：n5——长期未触动森林 * 0：未知 |
| Notes | STRING | 关于森林点/多边形的可选附加备注 |
| OBJECTID | STRING | 对象 ID |
| PROTECTION | INT | 林分的法律保护状态，源自世界保护区数据库。原始的 IUCN 分类被简化为三类： * 严格保护（IUCN 类别 I）； * 受保护（IUCN 类别 II–VI + 未分类）； * 未受保护。如果数据贡献者提供了更新/更精确的信息，则优先采用。可能的值： * 0：未受保护 * 1：受保护 * 2：严格保护 |
| RELEVANT_L | STRING | 描述该森林残存斑块的任何相关信息来源（包括期刊文章、本地报告和网站） |
| Source | STRING | 该森林残存斑块数据可直接归属的来源/所有权归属 |
| THREATS_1 | INT | 最可能危及原始森林残存斑块的威胁（如有）。可能的值： * 1：种植园开发 * 2：人为火灾 * 3：旅游/娱乐 * 4：基础设施开发（包括旅游） * 5：管理不善 * 6：非法采伐 * 7：木材和薪柴提取 * 8：非木材林产品提取 * 9：城市化和住房建设 * 10：气候变化 * 11：生物多样性丧失 |
| THREATS_2 | INT | 最可能危及原始森林残存斑块的威胁（如有）。 |
| Area_ha | DOUBLE | 森林多边形的面积（公顷） |
| SHAPE_Area | DOUBLE | 多边形的面积 |
| SHAPE_Leng | DOUBLE | 多边形的长度 |

## 能拿来做什么

- 欧洲原始森林清查与保护评估
- 森林自然度与干扰历史研究
- 生物多样性保护规划

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('HU_BERLIN/EPFD/V2/polygons');
```

- 数据集编号（Earth Engine ID）：`HU_BERLIN/EPFD/V2/polygons`
- 提供方：Geography Department, Humboldt University of Berlin, Berlin, Germany、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/HU_BERLIN_EPFD_V2_polygons

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：europe, forest, forest-biomass, table
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [European Primary Forest Dataset - Points](/pages/95de453f/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ESA CCI 地上生物量（2007、2010、2015–2022，v6.0）](/pages/e9028b43/)
- [WaPOR 实际蒸散发与截留 2.0](/pages/f46d014b/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
