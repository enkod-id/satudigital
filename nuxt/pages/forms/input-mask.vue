<template>
    <div>
        <ul class="flex space-x-2 rtl:space-x-reverse">
            <li>
                <a href="javascript:;" class="text-primary hover:underline">Forms</a>
            </li>
            <li class="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                <span>Input Mask</span>
            </li>
        </ul>
        <div class="space-y-8 pt-5">
            <div class="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                <div class="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                    <icon-bell />
                </div>
                <span class="ltr:mr-3 rtl:ml-3">Documentation: </span
                ><a href="https://www.npmjs.com/package/maska" target="_blank" class="block hover:underline">https://www.npmjs.com/package/maska</a>
            </div>

            <div class="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <!-- Basic -->
                <div class="panel">
                    <div class="mb-5 flex items-center justify-between">
                        <h5 class="text-lg font-semibold dark:text-white-light">Static Mask Basic</h5>
                        <a
                            class="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                            href="javascript:;"
                            @click="toggleCode('code1')"
                        >
                            <span class="flex items-center">
                                <icon-code class="me-2" />
                                Code
                            </span>
                        </a>
                    </div>
                    <div class="mb-5">
                        <p class="mb-5 text-white-dark">Input mask are use with <span class="text-danger">input</span> tags.</p>
                        <form>
                            <fieldset class="grid grid-cols-1 items-end gap-4 md:grid-cols-2">
                                <div>
                                    <label for="staticMask1" class="text-white-dark">v-maska="'##-#######'" (99-9999999)</label>
                                    <client-only>
                                        <input id="staticMask1" type="text" placeholder="__-_______" class="form-input" v-maska="'##-#######'" />
                                    </client-only>
                                </div>
                                <div>
                                    <label for="staticMask2" class="text-white-dark">v-maska="'AA-####'" (aa-9999)</label>
                                    <client-only>
                                        <input id="staticMask2" type="text" placeholder="__-____" class="form-input" v-maska="'aa-####'" />
                                    </client-only>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <template v-if="codeArr.includes('code1')">
                        <highlight>
                            <pre>
  &lt;!-- static mask basic --&gt;
  &lt;form&gt;
    &lt;fieldset class=&quot;grid grid-cols-1 md:grid-cols-2 items-end gap-4&quot;&gt;
      &lt;div&gt;
        &lt;label for=&quot;staticMask1&quot; class=&quot;text-white-dark&quot;&gt;v-maska=&quot;'##-#######'&quot; (99-9999999)&lt;/label&gt;
        &lt;input id=&quot;staticMask1&quot; type=&quot;text&quot; placeholder=&quot;__-_______&quot; class=&quot;form-input&quot; v-maska=&quot;'##-#######'&quot; /&gt;
      &lt;/div&gt;
      &lt;div&gt;
        &lt;label for=&quot;staticMask2&quot; class=&quot;text-white-dark&quot;&gt;v-maska=&quot;'AA-####'&quot; (aa-9999)&lt;/label&gt;
        &lt;input id=&quot;staticMask2&quot; type=&quot;text&quot; placeholder=&quot;__-____&quot; class=&quot;form-input&quot; v-maska=&quot;'aa-####'&quot; /&gt;
      &lt;/div&gt;
    &lt;/fieldset&gt;
  &lt;/form&gt;
  </pre
                            >
                        </highlight>
                    </template>
                </div>
                <div class="panel">
                    <div class="mb-5 flex items-center justify-between">
                        <h5 class="text-lg font-semibold dark:text-white-light">Alternate masks</h5>
                        <a
                            class="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                            href="javascript:;"
                            @click="toggleCode('code2')"
                        >
                            <span class="flex items-center">
                                <icon-code class="me-2" />
                                Code
                            </span>
                        </a>
                    </div>
                    <div class="mb-5">
                        <form>
                            <fieldset class="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div>
                                    <label for="altnMask1" class="text-white-dark">v-maska="'##.#'" (99.9)</label>
                                    <client-only> <input id="altnMask1" type="text" placeholder="__._" class="form-input" v-maska="'##.#'" /> </client-only>
                                </div>
                                <div>
                                    <label for="altnMask2" class="text-white-dark">v-maska="'##.##'" (99.99)</label>
                                    <client-only> <input id="altnMask2" type="text" placeholder="__.__" class="form-input" v-maska="'##.##'" /> </client-only>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <template v-if="codeArr.includes('code2')">
                        <highlight>
                            <pre>
  &lt;!-- alternate masks --&gt;
  &lt;form&gt;
    &lt;fieldset class=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;&gt;
      &lt;div&gt;
        &lt;label for=&quot;altnMask1&quot; class=&quot;text-white-dark&quot;&gt;v-maska=&quot;'##.#'&quot; (99.9)&lt;/label&gt;
        &lt;input id=&quot;altnMask1&quot; type=&quot;text&quot; placeholder=&quot;__._&quot; class=&quot;form-input&quot; v-maska=&quot;'##.#'&quot; /&gt;
      &lt;/div&gt;
      &lt;div&gt;
        &lt;label for=&quot;altnMask2&quot; class=&quot;text-white-dark&quot;&gt;v-maska=&quot;'##.##'&quot; (99.99)&lt;/label&gt;
        &lt;input id=&quot;altnMask2&quot; type=&quot;text&quot; placeholder=&quot;__.__&quot; class=&quot;form-input&quot; v-maska=&quot;'##.##'&quot; /&gt;
      &lt;/div&gt;
    &lt;/fieldset&gt;
  &lt;/form&gt;
  </pre
                            >
                        </highlight>
                    </template>
                </div>
                <div class="panel">
                    <div class="mb-5 flex items-center justify-between">
                        <h5 class="text-lg font-semibold dark:text-white-light">Dynamic Syntax</h5>
                        <a
                            class="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                            href="javascript:;"
                            @click="toggleCode('code3')"
                        >
                            <span class="flex items-center">
                                <icon-code class="me-2" />
                                Code
                            </span>
                        </a>
                    </div>
                    <div class="mb-5">
                        <form>
                            <fieldset class="grid grid-cols-1 items-end gap-4 md:grid-cols-3">
                                <div>
                                    <label for="dynamicMask1" class="text-white-dark">v-maska="'#-AAA###'" (9-a{1,3}9{1,3})</label>
                                    <client-only>
                                        <input id="dynamicMask1" type="text" placeholder="_-__" class="form-input" v-maska="'#-AAA###'" />
                                    </client-only>
                                </div>
                                <div>
                                    <label for="dynamicMask2" class="text-white-dark">v-maska="'AA-####'" (aa-9{1,4})</label>
                                    <client-only>
                                        <input id="dynamicMask2" type="text" placeholder="__-____" class="form-input" v-maska="'AA-####'" />
                                    </client-only>
                                </div>
                                <div>
                                    <label for="dynamicMask3" class="text-white-dark">v-maska="'AA-##'" (aa-9{1,2})</label>
                                    <client-only>
                                        <input id="dynamicMask3" type="text" placeholder="__-__" class="form-input" v-maska="'AA-##'" />
                                    </client-only>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <template v-if="codeArr.includes('code3')">
                        <highlight>
                            <pre>
  &lt;!-- dynamic syntax --&gt;
  &lt;form&gt;
    &lt;fieldset class=&quot;grid grid-cols-1 md:grid-cols-3 items-end gap-4&quot;&gt;
      &lt;div&gt;
        &lt;label for=&quot;dynamicMask1&quot; class=&quot;text-white-dark&quot;&gt;v-maska=&quot;'#-AAA###'&quot; (9-a{1,3}9{1,3})&lt;/label&gt;
        &lt;input id=&quot;dynamicMask1&quot; type=&quot;text&quot; placeholder=&quot;_-__&quot; class=&quot;form-input&quot; v-maska=&quot;'#-AAA###'&quot; /&gt;
      &lt;/div&gt;
      &lt;div&gt;
        &lt;label for=&quot;dynamicMask2&quot; class=&quot;text-white-dark&quot;&gt;v-maska=&quot;'AA-####'&quot; (aa-9{1,4})&lt;/label&gt;
        &lt;input id=&quot;dynamicMask2&quot; type=&quot;text&quot; placeholder=&quot;__-____&quot; class=&quot;form-input&quot; v-maska=&quot;'AA-####'&quot; /&gt;
      &lt;/div&gt;
      &lt;div&gt;
        &lt;label for=&quot;dynamicMask3&quot; class=&quot;text-white-dark&quot;&gt;v-maska=&quot;'AA-##'&quot; (aa-9{1,2})&lt;/label&gt;
        &lt;input id=&quot;dynamicMask3&quot; type=&quot;text&quot; placeholder=&quot;__-__&quot; class=&quot;form-input&quot; v-maska=&quot;'AA-##'&quot; /&gt;
      &lt;/div&gt;
    &lt;/fieldset&gt;
  &lt;/form&gt;
  </pre
                            >
                        </highlight>
                    </template>
                </div>
                <div class="panel">
                    <div class="mb-5 flex items-center justify-between">
                        <h5 class="text-lg font-semibold dark:text-white-light">Date</h5>
                        <a
                            class="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                            href="javascript:;"
                            @click="toggleCode('code4')"
                        >
                            <span class="flex items-center">
                                <icon-code class="me-2" />
                                Code
                            </span>
                        </a>
                    </div>
                    <div class="mb-5">
                        <form>
                            <fieldset class="grid grid-cols-1 items-end gap-4 md:grid-cols-3">
                                <div>
                                    <label for="dateMask1" class="text-white-dark">v-maska="'##/##/####'" (dd/mm/yyyy)</label>
                                    <client-only>
                                        <input id="dateMask1" type="text" placeholder="__/__/____" class="form-input" v-maska="'##/##/####'" />
                                    </client-only>
                                </div>
                                <div>
                                    <label for="dateMask2" class="text-white-dark">v-maska="'##-##-####'" (99-99-9999)</label>
                                    <client-only>
                                        <input id="dateMask2" type="text" placeholder="__-__-____" class="form-input" v-maska="'##-##-####'" />
                                    </client-only>
                                </div>
                                <div>
                                    <label for="dateMask3" class="text-white-dark">v-maska="'## December, ####'" (99 December, 9999)</label>
                                    <client-only>
                                        <input id="dateMask3" type="text" placeholder="__ December, ____" class="form-input" v-maska="'## December, ####'" />
                                    </client-only>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <template v-if="codeArr.includes('code4')">
                        <highlight>
                            <pre>
  &lt;!-- date --&gt;
  &lt;form&gt;
    &lt;fieldset class=&quot;grid grid-cols-1 md:grid-cols-3 items-end gap-4&quot;&gt;
      &lt;div&gt;
        &lt;label for=&quot;dateMask1&quot; class=&quot;text-white-dark&quot;&gt;v-maska=&quot;'##/##/####'&quot; (dd/mm/yyyy)&lt;/label&gt;
        &lt;input id=&quot;dateMask1&quot; type=&quot;text&quot; placeholder=&quot;__/__/____&quot; class=&quot;form-input&quot; v-maska=&quot;'##/##/####'&quot; /&gt;
      &lt;/div&gt;
      &lt;div&gt;
        &lt;label for=&quot;dateMask2&quot; class=&quot;text-white-dark&quot;&gt;v-maska=&quot;'##-##-####'&quot; (99-99-9999)&lt;/label&gt;
        &lt;input id=&quot;dateMask2&quot; type=&quot;text&quot; placeholder=&quot;__-__-____&quot; class=&quot;form-input&quot; v-maska=&quot;'##-##-####'&quot; /&gt;
      &lt;/div&gt;
      &lt;div&gt;
        &lt;label for=&quot;dateMask3&quot; class=&quot;text-white-dark&quot;&gt;v-maska=&quot;'## December, ####'&quot; (99 December, 9999)&lt;/label&gt;
        &lt;input id=&quot;dateMask3&quot; type=&quot;text&quot; placeholder=&quot;__ December, ____&quot; class=&quot;form-input&quot; v-maska=&quot;'## December, ####'&quot; /&gt;
      &lt;/div&gt;
    &lt;/fieldset&gt;
  &lt;/form&gt;
  </pre
                            >
                        </highlight>
                    </template>
                </div>
                <div class="panel">
                    <div class="mb-5 flex items-center justify-between">
                        <h5 class="text-lg font-semibold dark:text-white-light">IP</h5>
                        <a
                            class="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                            href="javascript:;"
                            @click="toggleCode('code5')"
                        >
                            <span class="flex items-center">
                                <icon-code class="me-2" />
                                Code
                            </span>
                        </a>
                    </div>
                    <div class="mb-5">
                        <form>
                            <fieldset>
                                <label for="ipMask" class="text-white-dark">v-maska="'###.###.###.###'" (192.198.1.1)</label>
                                <client-only>
                                    <input id="ipMask" type="text" placeholder="___.___.___.___" class="form-input" v-maska="'###.###.###.###'" />
                                </client-only>
                            </fieldset>
                        </form>
                    </div>
                    <template v-if="codeArr.includes('code5')">
                        <highlight>
                            <pre>
  &lt;!-- ip --&gt;
  &lt;form&gt;
    &lt;fieldset&gt;
      &lt;label for=&quot;ipMask&quot; class=&quot;text-white-dark&quot;&gt;v-maska=&quot;'###.###.###.###'&quot; (192.198.1.1)&lt;/label&gt;
      &lt;input id=&quot;ipMask&quot; type=&quot;text&quot; placeholder=&quot;___.___.___.___&quot; class=&quot;form-input&quot; v-maska=&quot;'###.###.###.###'&quot; /&gt;
    &lt;/fieldset&gt;
  &lt;/form&gt;
  </pre
                            >
                        </highlight>
                    </template>
                </div>
                <div class="panel">
                    <div class="mb-5 flex items-center justify-between">
                        <h5 class="text-lg font-semibold dark:text-white-light">Phone</h5>
                        <a
                            class="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                            href="javascript:;"
                            @click="toggleCode('code6')"
                        >
                            <span class="flex items-center">
                                <icon-code class="me-2" />
                                Code
                            </span>
                        </a>
                    </div>
                    <div class="mb-5">
                        <form>
                            <fieldset>
                                <label for="phoneMask" class="text-white-dark">v-maska="'(###) ###-####'" ((999) 999-9999)</label>
                                <client-only>
                                    <input id="phoneMask" type="text" placeholder="(___) ___-____" class="form-input" v-maska="'(###) ###-####'" />
                                </client-only>
                            </fieldset>
                        </form>
                    </div>
                    <template v-if="codeArr.includes('code6')">
                        <highlight>
                            <pre>
  &lt;!-- phone --&gt;
  &lt;form&gt;
    &lt;fieldset&gt;
      &lt;label for=&quot;phoneMask&quot; class=&quot;text-white-dark&quot;&gt;v-maska=&quot;'(###) ###-####'&quot; ((999) 999-9999)&lt;/label&gt;
      &lt;input id=&quot;phoneMask&quot; type=&quot;text&quot; placeholder=&quot;(___) ___-____&quot; class=&quot;form-input&quot; v-maska=&quot;'(###) ###-####'&quot; /&gt;
    &lt;/fieldset&gt;
  &lt;/form&gt;
  </pre
                            >
                        </highlight>
                    </template>
                </div>
                <div class="panel">
                    <div class="mb-5 flex items-center justify-between">
                        <h5 class="text-lg font-semibold dark:text-white-light">Currency</h5>
                        <a
                            class="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                            href="javascript:;"
                            @click="toggleCode('code7')"
                        >
                            <span class="flex items-center">
                                <icon-code class="me-2" />
                                Code
                            </span>
                        </a>
                    </div>
                    <div class="mb-5">
                        <form>
                            <fieldset>
                                <label for="currencyMask" class="text-white-dark">$999,9999,999.99</label>
                                <client-only>
                                    <input id="currencyMask" type="text" placeholder="$___,____,___.__" class="form-input" v-maska="'$###,####,###.##'" />
                                </client-only>
                            </fieldset>
                        </form>
                    </div>
                    <template v-if="codeArr.includes('code7')">
                        <highlight>
                            <pre>
  &lt;!-- currency --&gt;
  &lt;form&gt;
    &lt;fieldset&gt;
      &lt;label for=&quot;currencyMask&quot; class=&quot;text-white-dark&quot;&gt;$999,9999,999.99&lt;/label&gt;
      &lt;input id=&quot;currencyMask&quot; type=&quot;text&quot; placeholder=&quot;$___,____,___.__&quot; class=&quot;form-input&quot; v-maska=&quot;'$###,####,###.##'&quot; /&gt;
    &lt;/fieldset&gt;
  &lt;/form&gt;
  </pre
                            >
                        </highlight>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import highlight from '@/components/plugins/highlight.vue';
    import codePreview from '@/composables/codePreview';
    useHead({ title: 'Input Mask' });

    const { codeArr, toggleCode } = codePreview();
</script>
